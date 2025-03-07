---
title: Go
---

<!-- This file is generated by [/src/scripts/client_readmes.zig](/src/scripts/client_readmes.zig). -->
# tigerbeetle-go

The TigerBeetle client for Go.

[![Go Reference](https://pkg.go.dev/badge/github.com/tigerbeetle/tigerbeetle-go.svg)](https://pkg.go.dev/github.com/tigerbeetle/tigerbeetle-go)

Make sure to import `github.com/tigerbeetle/tigerbeetle-go`, not
this repo and subdirectory.

## Prerequisites

Linux >= 5.6 is the only production environment we
support. But for ease of development we also support macOS and Windows.
* Go >= 1.21

**Additionally on Windows**: you must install [Zig
0.13.0](https://ziglang.org/download/#release-0.13.0) and set the
`CC` environment variable to `zig.exe cc`. Use the full path for
`zig.exe`.

## Setup

First, create a directory for your project and `cd` into the directory.

Then, install the TigerBeetle client:

```console
go mod init tbtest
go get github.com/tigerbeetle/tigerbeetle-go
```

Now, create `main.go` and copy this into it:

```go
package main

import (
	"fmt"
	"log"
	"os"

	. "github.com/tigerbeetle/tigerbeetle-go"
	. "github.com/tigerbeetle/tigerbeetle-go/pkg/types"
)

func main() {
	fmt.Println("Import ok!")
}

```

Finally, build and run:

```console
go run main.go
```

Now that all prerequisites and dependencies are correctly set
up, let's dig into using TigerBeetle.

## Sample projects

This document is primarily a reference guide to
the client. Below are various sample projects demonstrating
features of TigerBeetle.

* [Basic](/src/clients/go/samples/basic/): Create two accounts and transfer an amount between them.
* [Two-Phase Transfer](/src/clients/go/samples/two-phase/): Create two accounts and start a pending transfer between
them, then post the transfer.
* [Many Two-Phase Transfers](/src/clients/go/samples/two-phase-many/): Create two accounts and start a number of pending transfer
between them, posting and voiding alternating transfers.
## Creating a Client

A client is created with a cluster ID and replica
addresses for all replicas in the cluster. The cluster
ID and replica addresses are both chosen by the system that
starts the TigerBeetle cluster.

Clients are thread-safe and a single instance should be shared
between multiple concurrent tasks.

Multiple clients are useful when connecting to more than
one TigerBeetle cluster.

In this example the cluster ID is `0` and there is one
replica. The address is read from the `TB_ADDRESS`
environment variable and defaults to port `3000`.

```go
tbAddress := os.Getenv("TB_ADDRESS")
if len(tbAddress) == 0 {
	tbAddress = "3000"
}
client, err := NewClient(ToUint128(0), []string{tbAddress}, 256)
if err != nil {
	log.Printf("Error creating client: %s", err)
	return
}
defer client.Close()
```

The third argument to `NewClient` is a `uint` max concurrency
setting. `256` is a good default and can increase to `8192`
as you need increased throughput.

The following are valid addresses:
* `3000` (interpreted as `127.0.0.1:3000`)
* `127.0.0.1:3000` (interpreted as `127.0.0.1:3000`)
* `127.0.0.1` (interpreted as `127.0.0.1:3001`, `3001` is the default port)

## Creating Accounts

See details for account fields in the [Accounts
reference](https://docs.tigerbeetle.com/reference/account).

```go
accountsRes, err := client.CreateAccounts([]Account{
	{
		ID:             ToUint128(137),
		DebitsPending:  ToUint128(0),
		DebitsPosted:   ToUint128(0),
		CreditsPending: ToUint128(0),
		CreditsPosted:  ToUint128(0),
		UserData128:    ToUint128(0),
		UserData64:     0,
		UserData32:     0,
		Reserved:       0,
		Ledger:         1,
		Code:           718,
		Flags:          0,
		Timestamp:      0,
	},
})
if err != nil {
	log.Printf("Error creating accounts: %s", err)
	return
}

for _, err := range accountsRes {
	log.Printf("Error creating account %d: %s", err.Index, err.Result)
	return
}
```

The `Uint128` fields like `ID`, `UserData128`, `Amount` and
account balances have a few helper functions to make it easier
to convert 128-bit little-endian unsigned integers between
`string`, `math/big.Int`, and `[]byte`.

See the type [Uint128](https://pkg.go.dev/github.com/tigerbeetle/tigerbeetle-go/pkg/types#Uint128) for more details.

### Account Flags

The account flags value is a bitfield. See details for
these flags in the [Accounts
reference](https://docs.tigerbeetle.com/reference/account#flags).

To toggle behavior for an account, use the `types.AccountFlags` struct
to combine enum values and generate a `uint16`. Here are a
few examples:

* `AccountFlags{Linked: true}.ToUint16()`
* `AccountFlags{DebitsMustNotExceedCredits: true}.ToUint16()`
* `AccountFlags{CreditsMustNotExceedDebits: true}.ToUint16()`
* `AccountFlags{History: true}.ToUint16()`

For example, to link two accounts where the first account
additionally has the `debits_must_not_exceed_credits` constraint:

```go
account0 := Account{ /* ... account values ... */ }
account1 := Account{ /* ... account values ... */ }
account0.Flags = AccountFlags{Linked: true}.ToUint16()

accountErrors, err := client.CreateAccounts([]Account{account0, account1})
if err != nil {
	log.Printf("Error creating accounts: %s", err)
	return
}
```

### Response and Errors

The response is an empty array if all accounts were
created successfully. If the response is non-empty, each
object in the response array contains error information
for an account that failed. The error object contains an
error code and the index of the account in the request
batch.

See all error conditions in the [create_accounts
reference](https://docs.tigerbeetle.com/reference/requests/create_accounts).

```go
account2 := Account{ /* ... account values ... */ }
account3 := Account{ /* ... account values ... */ }
account4 := Account{ /* ... account values ... */ }

accountErrors, err = client.CreateAccounts([]Account{account2, account3, account4})
if err != nil {
	log.Printf("Error creating accounts: %s", err)
	return
}
for _, err := range accountErrors {
	log.Printf("Error creating account %d: %s", err.Index, err.Result)
	return
}
```

To handle errors you can either 1) exactly match error codes returned
from `client.createAccounts` with enum values in the
`CreateAccountError` object, or you can 2) look up the error code in
the `CreateAccountError` object for a human-readable string.

## Account Lookup

Account lookup is batched, like account creation. Pass
in all IDs to fetch. The account for each matched ID is returned.

If no account matches an ID, no object is returned for
that account. So the order of accounts in the response is
not necessarily the same as the order of IDs in the
request. You can refer to the ID field in the response to
distinguish accounts.

```go
accounts, err := client.LookupAccounts([]Uint128{ToUint128(137), ToUint128(138)})
if err != nil {
	log.Printf("Could not fetch accounts: %s", err)
	return
}
log.Println(accounts)
```

## Create Transfers

This creates a journal entry between two accounts.

See details for transfer fields in the [Transfers
reference](https://docs.tigerbeetle.com/reference/transfer).

```go
transfers := []Transfer{{
	ID:              ToUint128(1),
	DebitAccountID:  ToUint128(1),
	CreditAccountID: ToUint128(2),
	Amount:          ToUint128(10),
	PendingID:       ToUint128(0),
	UserData128:     ToUint128(2),
	UserData64:      0,
	UserData32:      0,
	Timeout:         0,
	Ledger:          1,
	Code:            1,
	Flags:           0,
	Timestamp:       0,
}}

transfersRes, err := client.CreateTransfers(transfers)
if err != nil {
	log.Printf("Error creating transfer batch: %s", err)
	return
}
```

### Response and Errors

The response is an empty array if all transfers were created
successfully. If the response is non-empty, each object in the
response array contains error information for a transfer that
failed. The error object contains an error code and the index of the
transfer in the request batch.

See all error conditions in the [create_transfers
reference](https://docs.tigerbeetle.com/reference/requests/create_transfers).

```go
for _, err := range transfersRes {
	log.Printf("Batch transfer at %d failed to create: %s", err.Index, err.Result)
	return
}
```

## Batching

TigerBeetle performance is maximized when you batch
API requests. The client does not do this automatically for
you. So, for example, you *can* insert 1 million transfers
one at a time like so:

```go
for i := 0; i < len(transfers); i++ {
	transfersRes, err = client.CreateTransfers([]Transfer{transfers[i]})
	// error handling omitted
}
```

But the insert rate will be a *fraction* of
potential. Instead, **always batch what you can**.

The maximum batch size is set in the TigerBeetle server. The default
is 8190.

```go
BATCH_SIZE := 8190
for i := 0; i < len(transfers); i += BATCH_SIZE {
	batch := BATCH_SIZE
	if i+BATCH_SIZE > len(transfers) {
		batch = len(transfers) - i
	}
	transfersRes, err = client.CreateTransfers(transfers[i : i+batch])
	// error handling omitted
}
```

### Queues and Workers

If you are making requests to TigerBeetle from workers
pulling jobs from a queue, you can batch requests to
TigerBeetle by having the worker act on multiple jobs from
the queue at once rather than one at a time. i.e. pulling
multiple jobs from the queue rather than just one.

## Transfer Flags

The transfer `flags` value is a bitfield. See details for these flags in
the [Transfers
reference](https://docs.tigerbeetle.com/reference/transfer#flags).

To toggle behavior for an account, use the `types.TransferFlags` struct
to combine enum values and generate a `uint16`. Here are a
few examples:

* `TransferFlags{Linked: true}.ToUint16()`
* `TransferFlags{Pending: true}.ToUint16()`
* `TransferFlags{PostPendingTransfer: true}.ToUint16()`
* `TransferFlags{VoidPendingTransfer: true}.ToUint16()`

For example, to link `transfer0` and `transfer1`:

```go
transfer0 := Transfer{ /* ... account values ... */ }
transfer1 := Transfer{ /* ... account values ... */ }
transfer0.Flags = TransferFlags{Linked: true}.ToUint16()
transfersRes, err = client.CreateTransfers([]Transfer{transfer0, transfer1})
// error handling omitted
```

### Two-Phase Transfers

Two-phase transfers are supported natively by toggling the appropriate
flag. TigerBeetle will then adjust the `credits_pending` and
`debits_pending` fields of the appropriate accounts. A corresponding
post pending transfer then needs to be sent to post or void the
transfer.

#### Post a Pending Transfer

With `flags` set to `post_pending_transfer`,
TigerBeetle will post the transfer. TigerBeetle will atomically roll
back the changes to `debits_pending` and `credits_pending` of the
appropriate accounts and apply them to the `debits_posted` and
`credits_posted` balances.

```go
transfer := Transfer{
	ID:        ToUint128(2),
	PendingID: ToUint128(1),
	Flags:     TransferFlags{PostPendingTransfer: true}.ToUint16(),
	Timestamp: 0,
}
transfersRes, err = client.CreateTransfers([]Transfer{transfer})
// error handling omitted
```

#### Void a Pending Transfer

In contrast, with `flags` set to `void_pending_transfer`,
TigerBeetle will void the transfer. TigerBeetle will roll
back the changes to `debits_pending` and `credits_pending` of the
appropriate accounts and **not** apply them to the `debits_posted` and
`credits_posted` balances.

```go
transfer = Transfer{
	ID:        ToUint128(2),
	PendingID: ToUint128(1),
	Flags:     TransferFlags{VoidPendingTransfer: true}.ToUint16(),
	Timestamp: 0,
}
transfersRes, err = client.CreateTransfers([]Transfer{transfer})
// error handling omitted
```

## Transfer Lookup

NOTE: While transfer lookup exists, it is not a flexible query API. We
are developing query APIs and there will be new methods for querying
transfers in the future.

Transfer lookup is batched, like transfer creation. Pass in all `id`s to
fetch, and matched transfers are returned.

If no transfer matches an `id`, no object is returned for that
transfer. So the order of transfers in the response is not necessarily
the same as the order of `id`s in the request. You can refer to the
`id` field in the response to distinguish transfers.

```go
transfers, err = client.LookupTransfers([]Uint128{ToUint128(1), ToUint128(2)})
if err != nil {
	log.Printf("Could not fetch transfers: %s", err)
	return
}
log.Println(transfers)
```

## Get Account Transfers

NOTE: This is a preview API that is subject to breaking changes once we have
a stable querying API.

Fetches the transfers involving a given account, allowing basic filter and pagination
capabilities.

The transfers in the response are sorted by `timestamp` in chronological or
reverse-chronological order.

```go
filter := AccountFilter{
	AccountID:    ToUint128(2),
	TimestampMin: 0,  // No filter by Timestamp.
	TimestampMax: 0,  // No filter by Timestamp.
	Limit:        10, // Limit to ten transfers at most.
	Flags: AccountFilterFlags{
		Debits:   true, // Include transfer from the debit side.
		Credits:  true, // Include transfer from the credit side.
		Reversed: true, // Sort by timestamp in reverse-chronological order.
	}.ToUint32(),
}

transfers, err = client.GetAccountTransfers(filter)
if err != nil {
	log.Printf("Could not fetch transfers: %s", err)
	return
}
log.Println(transfers)
```

## Get Account Balances

NOTE: This is a preview API that is subject to breaking changes once we have
a stable querying API.

Fetches the point-in-time balances of a given account, allowing basic filter and
pagination capabilities.

Only accounts created with the flag
[`history`](https://docs.tigerbeetle.com/reference/account#flagshistory) set retain
[historical balances](https://docs.tigerbeetle.com/reference/requests/get_account_balances).

The balances in the response are sorted by `timestamp` in chronological or
reverse-chronological order.

```go
filter = AccountFilter{
	AccountID:    ToUint128(2),
	TimestampMin: 0,  // No filter by Timestamp.
	TimestampMax: 0,  // No filter by Timestamp.
	Limit:        10, // Limit to ten balances at most.
	Flags: AccountFilterFlags{
		Debits:   true, // Include transfer from the debit side.
		Credits:  true, // Include transfer from the credit side.
		Reversed: true, // Sort by timestamp in reverse-chronological order.
	}.ToUint32(),
}

account_balances, err := client.GetAccountBalances(filter)
if err != nil {
	log.Printf("Could not fetch the history: %s", err)
	return
}
log.Println(account_balances)
```

## Query Accounts

NOTE: This is a preview API that is subject to breaking changes once we have
a stable querying API.

Query accounts by the intersection of some fields and by timestamp range.

The accounts in the response are sorted by `timestamp` in chronological or
reverse-chronological order.

```go
query_filter := QueryFilter{
	UserData128:  ToUint128(1000), // Filter by UserData
	UserData64:   100,
	UserData32:   10,
	Code:         1,  // Filter by Code
	Ledger:       0,  // No filter by Ledger
	TimestampMin: 0,  // No filter by Timestamp.
	TimestampMax: 0,  // No filter by Timestamp.
	Limit:        10, // Limit to ten balances at most.
	Flags: QueryFilterFlags{
		Reversed: true, // Sort by timestamp in reverse-chronological order.
	}.ToUint32(),
}

query_accounts, err := client.QueryAccounts(query_filter)
if err != nil {
	log.Printf("Could not query accounts: %s", err)
	return
}
log.Println(query_accounts)
```

## Query Transfers

NOTE: This is a preview API that is subject to breaking changes once we have
a stable querying API.

Query transfers by the intersection of some fields and by timestamp range.

The transfers in the response are sorted by `timestamp` in chronological or
reverse-chronological order.

```go
query_filter = QueryFilter{
	UserData128:  ToUint128(1000), // Filter by UserData.
	UserData64:   100,
	UserData32:   10,
	Code:         1,  // Filter by Code.
	Ledger:       0,  // No filter by Ledger.
	TimestampMin: 0,  // No filter by Timestamp.
	TimestampMax: 0,  // No filter by Timestamp.
	Limit:        10, // Limit to ten balances at most.
	Flags: QueryFilterFlags{
		Reversed: true, // Sort by timestamp in reverse-chronological order.
	}.ToUint32(),
}

query_transfers, err := client.QueryTransfers(query_filter)
if err != nil {
	log.Printf("Could not query transfers: %s", err)
	return
}
log.Println(query_transfers)
```

## Linked Events

When the `linked` flag is specified for an account when creating accounts or
a transfer when creating transfers, it links that event with the next event in the
batch, to create a chain of events, of arbitrary length, which all
succeed or fail together. The tail of a chain is denoted by the first
event without this flag. The last event in a batch may therefore never
have the `linked` flag set as this would leave a chain
open-ended. Multiple chains or individual events may coexist within a
batch to succeed or fail independently.

Events within a chain are executed within order, or are rolled back on
error, so that the effect of each event in the chain is visible to the
next, and so that the chain is either visible or invisible as a unit
to subsequent events after the chain. The event that was the first to
break the chain will have a unique error result. Other events in the
chain will have their error result set to `linked_event_failed`.

```go
batch := []Transfer{}
linkedFlag := TransferFlags{Linked: true}.ToUint16()

// An individual transfer (successful):
batch = append(batch, Transfer{ID: ToUint128(1) /* ... rest of transfer ... */})

// A chain of 4 transfers (the last transfer in the chain closes the chain with linked=false):
batch = append(batch, Transfer{ID: ToUint128(2) /* ... , */, Flags: linkedFlag}) // Commit/rollback.
batch = append(batch, Transfer{ID: ToUint128(3) /* ... , */, Flags: linkedFlag}) // Commit/rollback.
batch = append(batch, Transfer{ID: ToUint128(2) /* ... , */, Flags: linkedFlag}) // Fail with exists
batch = append(batch, Transfer{ID: ToUint128(4) /* ... , */})                    // Fail without committing

// An individual transfer (successful):
// This should not see any effect from the failed chain above.
batch = append(batch, Transfer{ID: ToUint128(2) /* ... rest of transfer ... */})

// A chain of 2 transfers (the first transfer fails the chain):
batch = append(batch, Transfer{ID: ToUint128(2) /* ... rest of transfer ... */, Flags: linkedFlag})
batch = append(batch, Transfer{ID: ToUint128(3) /* ... rest of transfer ... */})

// A chain of 2 transfers (successful):
batch = append(batch, Transfer{ID: ToUint128(3) /* ... rest of transfer ... */, Flags: linkedFlag})
batch = append(batch, Transfer{ID: ToUint128(4) /* ... rest of transfer ... */})

transfersRes, err = client.CreateTransfers(batch)
```
