///////////////////////////////////////////////////////
// This file was auto-generated by node_bindings.zig //
//              Do not manually modify.              //
///////////////////////////////////////////////////////


/**
* See [AccountFlags](https://docs.tigerbeetle.com/reference/accounts#flags)
*/
export enum AccountFlags {
  none = 0,

  /**
  * See [linked](https://docs.tigerbeetle.com/reference/accounts#flagslinked)
  */
  linked = (1 << 0),

  /**
  * See [debits_must_not_exceed_credits](https://docs.tigerbeetle.com/reference/accounts#flagsdebits_must_not_exceed_credits)
  */
  debits_must_not_exceed_credits = (1 << 1),

  /**
  * See [credits_must_not_exceed_debits](https://docs.tigerbeetle.com/reference/accounts#flagscredits_must_not_exceed_debits)
  */
  credits_must_not_exceed_debits = (1 << 2),

  /**
  * See [history](https://docs.tigerbeetle.com/reference/accounts#flagshistory)
  */
  history = (1 << 3),
}


/**
* See [TransferFlags](https://docs.tigerbeetle.com/reference/transfers#flags)
*/
export enum TransferFlags {
  none = 0,

  /**
  * See [linked](https://docs.tigerbeetle.com/reference/transfers#flagslinked)
  */
  linked = (1 << 0),

  /**
  * See [pending](https://docs.tigerbeetle.com/reference/transfers#flagspending)
  */
  pending = (1 << 1),

  /**
  * See [post_pending_transfer](https://docs.tigerbeetle.com/reference/transfers#flagspost_pending_transfer)
  */
  post_pending_transfer = (1 << 2),

  /**
  * See [void_pending_transfer](https://docs.tigerbeetle.com/reference/transfers#flagsvoid_pending_transfer)
  */
  void_pending_transfer = (1 << 3),

  /**
  * See [balancing_debit](https://docs.tigerbeetle.com/reference/transfers#flagsbalancing_debit)
  */
  balancing_debit = (1 << 4),

  /**
  * See [balancing_credit](https://docs.tigerbeetle.com/reference/transfers#flagsbalancing_credit)
  */
  balancing_credit = (1 << 5),
}


/**
* See [AccountFilterFlags](https://docs.tigerbeetle.com/reference/account_filter#flags)
*/
export enum AccountFilterFlags {
  none = 0,

  /**
  * See [debits](https://docs.tigerbeetle.com/reference/account_filter#flagsdebits)
  */
  debits = (1 << 0),

  /**
  * See [credits](https://docs.tigerbeetle.com/reference/account_filter#flagscredits)
  */
  credits = (1 << 1),

  /**
  * See [reversed](https://docs.tigerbeetle.com/reference/account_filter#flagsreversed)
  */
  reversed = (1 << 2),
}


/**
* See [Account](https://docs.tigerbeetle.com/reference/accounts/#)
*/
export type Account = {

  /**
  * See [id](https://docs.tigerbeetle.com/reference/accounts/#id)
  */
  id: bigint

  /**
  * See [debits_pending](https://docs.tigerbeetle.com/reference/accounts/#debits_pending)
  */
  debits_pending: bigint

  /**
  * See [debits_posted](https://docs.tigerbeetle.com/reference/accounts/#debits_posted)
  */
  debits_posted: bigint

  /**
  * See [credits_pending](https://docs.tigerbeetle.com/reference/accounts/#credits_pending)
  */
  credits_pending: bigint

  /**
  * See [credits_posted](https://docs.tigerbeetle.com/reference/accounts/#credits_posted)
  */
  credits_posted: bigint

  /**
  * See [user_data_128](https://docs.tigerbeetle.com/reference/accounts/#user_data_128)
  */
  user_data_128: bigint

  /**
  * See [user_data_64](https://docs.tigerbeetle.com/reference/accounts/#user_data_64)
  */
  user_data_64: bigint

  /**
  * See [user_data_32](https://docs.tigerbeetle.com/reference/accounts/#user_data_32)
  */
  user_data_32: number

  /**
  * See [reserved](https://docs.tigerbeetle.com/reference/accounts/#reserved)
  */
  reserved: number

  /**
  * See [ledger](https://docs.tigerbeetle.com/reference/accounts/#ledger)
  */
  ledger: number

  /**
  * See [code](https://docs.tigerbeetle.com/reference/accounts/#code)
  */
  code: number

  /**
  * See [flags](https://docs.tigerbeetle.com/reference/accounts/#flags)
  */
  flags: number

  /**
  * See [timestamp](https://docs.tigerbeetle.com/reference/accounts/#timestamp)
  */
  timestamp: bigint
}


/**
* See [Transfer](https://docs.tigerbeetle.com/reference/transfers/#)
*/
export type Transfer = {

  /**
  * See [id](https://docs.tigerbeetle.com/reference/transfers/#id)
  */
  id: bigint

  /**
  * See [debit_account_id](https://docs.tigerbeetle.com/reference/transfers/#debit_account_id)
  */
  debit_account_id: bigint

  /**
  * See [credit_account_id](https://docs.tigerbeetle.com/reference/transfers/#credit_account_id)
  */
  credit_account_id: bigint

  /**
  * See [amount](https://docs.tigerbeetle.com/reference/transfers/#amount)
  */
  amount: bigint

  /**
  * See [pending_id](https://docs.tigerbeetle.com/reference/transfers/#pending_id)
  */
  pending_id: bigint

  /**
  * See [user_data_128](https://docs.tigerbeetle.com/reference/transfers/#user_data_128)
  */
  user_data_128: bigint

  /**
  * See [user_data_64](https://docs.tigerbeetle.com/reference/transfers/#user_data_64)
  */
  user_data_64: bigint

  /**
  * See [user_data_32](https://docs.tigerbeetle.com/reference/transfers/#user_data_32)
  */
  user_data_32: number

  /**
  * See [timeout](https://docs.tigerbeetle.com/reference/transfers/#timeout)
  */
  timeout: number

  /**
  * See [ledger](https://docs.tigerbeetle.com/reference/transfers/#ledger)
  */
  ledger: number

  /**
  * See [code](https://docs.tigerbeetle.com/reference/transfers/#code)
  */
  code: number

  /**
  * See [flags](https://docs.tigerbeetle.com/reference/transfers/#flags)
  */
  flags: number

  /**
  * See [timestamp](https://docs.tigerbeetle.com/reference/transfers/#timestamp)
  */
  timestamp: bigint
}


/**
* See [CreateAccountError](https://docs.tigerbeetle.com/reference/operations/create_accounts#)
*/
export enum CreateAccountError {

  /**
  * See [ok](https://docs.tigerbeetle.com/reference/operations/create_accounts#ok)
  */
  ok = 0,

  /**
  * See [linked_event_failed](https://docs.tigerbeetle.com/reference/operations/create_accounts#linked_event_failed)
  */
  linked_event_failed = 1,

  /**
  * See [linked_event_chain_open](https://docs.tigerbeetle.com/reference/operations/create_accounts#linked_event_chain_open)
  */
  linked_event_chain_open = 2,

  /**
  * See [timestamp_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#timestamp_must_be_zero)
  */
  timestamp_must_be_zero = 3,

  /**
  * See [reserved_field](https://docs.tigerbeetle.com/reference/operations/create_accounts#reserved_field)
  */
  reserved_field = 4,

  /**
  * See [reserved_flag](https://docs.tigerbeetle.com/reference/operations/create_accounts#reserved_flag)
  */
  reserved_flag = 5,

  /**
  * See [id_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#id_must_not_be_zero)
  */
  id_must_not_be_zero = 6,

  /**
  * See [id_must_not_be_int_max](https://docs.tigerbeetle.com/reference/operations/create_accounts#id_must_not_be_int_max)
  */
  id_must_not_be_int_max = 7,

  /**
  * See [flags_are_mutually_exclusive](https://docs.tigerbeetle.com/reference/operations/create_accounts#flags_are_mutually_exclusive)
  */
  flags_are_mutually_exclusive = 8,

  /**
  * See [debits_pending_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#debits_pending_must_be_zero)
  */
  debits_pending_must_be_zero = 9,

  /**
  * See [debits_posted_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#debits_posted_must_be_zero)
  */
  debits_posted_must_be_zero = 10,

  /**
  * See [credits_pending_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#credits_pending_must_be_zero)
  */
  credits_pending_must_be_zero = 11,

  /**
  * See [credits_posted_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#credits_posted_must_be_zero)
  */
  credits_posted_must_be_zero = 12,

  /**
  * See [ledger_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#ledger_must_not_be_zero)
  */
  ledger_must_not_be_zero = 13,

  /**
  * See [code_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_accounts#code_must_not_be_zero)
  */
  code_must_not_be_zero = 14,

  /**
  * See [exists_with_different_flags](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists_with_different_flags)
  */
  exists_with_different_flags = 15,

  /**
  * See [exists_with_different_user_data_128](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists_with_different_user_data_128)
  */
  exists_with_different_user_data_128 = 16,

  /**
  * See [exists_with_different_user_data_64](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists_with_different_user_data_64)
  */
  exists_with_different_user_data_64 = 17,

  /**
  * See [exists_with_different_user_data_32](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists_with_different_user_data_32)
  */
  exists_with_different_user_data_32 = 18,

  /**
  * See [exists_with_different_ledger](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists_with_different_ledger)
  */
  exists_with_different_ledger = 19,

  /**
  * See [exists_with_different_code](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists_with_different_code)
  */
  exists_with_different_code = 20,

  /**
  * See [exists](https://docs.tigerbeetle.com/reference/operations/create_accounts#exists)
  */
  exists = 21,
}


/**
* See [CreateTransferError](https://docs.tigerbeetle.com/reference/operations/create_transfers#)
*/
export enum CreateTransferError {

  /**
  * See [ok](https://docs.tigerbeetle.com/reference/operations/create_transfers#ok)
  */
  ok = 0,

  /**
  * See [linked_event_failed](https://docs.tigerbeetle.com/reference/operations/create_transfers#linked_event_failed)
  */
  linked_event_failed = 1,

  /**
  * See [linked_event_chain_open](https://docs.tigerbeetle.com/reference/operations/create_transfers#linked_event_chain_open)
  */
  linked_event_chain_open = 2,

  /**
  * See [timestamp_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#timestamp_must_be_zero)
  */
  timestamp_must_be_zero = 3,

  /**
  * See [reserved_flag](https://docs.tigerbeetle.com/reference/operations/create_transfers#reserved_flag)
  */
  reserved_flag = 4,

  /**
  * See [id_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#id_must_not_be_zero)
  */
  id_must_not_be_zero = 5,

  /**
  * See [id_must_not_be_int_max](https://docs.tigerbeetle.com/reference/operations/create_transfers#id_must_not_be_int_max)
  */
  id_must_not_be_int_max = 6,

  /**
  * See [flags_are_mutually_exclusive](https://docs.tigerbeetle.com/reference/operations/create_transfers#flags_are_mutually_exclusive)
  */
  flags_are_mutually_exclusive = 7,

  /**
  * See [debit_account_id_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#debit_account_id_must_not_be_zero)
  */
  debit_account_id_must_not_be_zero = 8,

  /**
  * See [debit_account_id_must_not_be_int_max](https://docs.tigerbeetle.com/reference/operations/create_transfers#debit_account_id_must_not_be_int_max)
  */
  debit_account_id_must_not_be_int_max = 9,

  /**
  * See [credit_account_id_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#credit_account_id_must_not_be_zero)
  */
  credit_account_id_must_not_be_zero = 10,

  /**
  * See [credit_account_id_must_not_be_int_max](https://docs.tigerbeetle.com/reference/operations/create_transfers#credit_account_id_must_not_be_int_max)
  */
  credit_account_id_must_not_be_int_max = 11,

  /**
  * See [accounts_must_be_different](https://docs.tigerbeetle.com/reference/operations/create_transfers#accounts_must_be_different)
  */
  accounts_must_be_different = 12,

  /**
  * See [pending_id_must_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_id_must_be_zero)
  */
  pending_id_must_be_zero = 13,

  /**
  * See [pending_id_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_id_must_not_be_zero)
  */
  pending_id_must_not_be_zero = 14,

  /**
  * See [pending_id_must_not_be_int_max](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_id_must_not_be_int_max)
  */
  pending_id_must_not_be_int_max = 15,

  /**
  * See [pending_id_must_be_different](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_id_must_be_different)
  */
  pending_id_must_be_different = 16,

  /**
  * See [timeout_reserved_for_pending_transfer](https://docs.tigerbeetle.com/reference/operations/create_transfers#timeout_reserved_for_pending_transfer)
  */
  timeout_reserved_for_pending_transfer = 17,

  /**
  * See [amount_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#amount_must_not_be_zero)
  */
  amount_must_not_be_zero = 18,

  /**
  * See [ledger_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#ledger_must_not_be_zero)
  */
  ledger_must_not_be_zero = 19,

  /**
  * See [code_must_not_be_zero](https://docs.tigerbeetle.com/reference/operations/create_transfers#code_must_not_be_zero)
  */
  code_must_not_be_zero = 20,

  /**
  * See [debit_account_not_found](https://docs.tigerbeetle.com/reference/operations/create_transfers#debit_account_not_found)
  */
  debit_account_not_found = 21,

  /**
  * See [credit_account_not_found](https://docs.tigerbeetle.com/reference/operations/create_transfers#credit_account_not_found)
  */
  credit_account_not_found = 22,

  /**
  * See [accounts_must_have_the_same_ledger](https://docs.tigerbeetle.com/reference/operations/create_transfers#accounts_must_have_the_same_ledger)
  */
  accounts_must_have_the_same_ledger = 23,

  /**
  * See [transfer_must_have_the_same_ledger_as_accounts](https://docs.tigerbeetle.com/reference/operations/create_transfers#transfer_must_have_the_same_ledger_as_accounts)
  */
  transfer_must_have_the_same_ledger_as_accounts = 24,

  /**
  * See [pending_transfer_not_found](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_not_found)
  */
  pending_transfer_not_found = 25,

  /**
  * See [pending_transfer_not_pending](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_not_pending)
  */
  pending_transfer_not_pending = 26,

  /**
  * See [pending_transfer_has_different_debit_account_id](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_has_different_debit_account_id)
  */
  pending_transfer_has_different_debit_account_id = 27,

  /**
  * See [pending_transfer_has_different_credit_account_id](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_has_different_credit_account_id)
  */
  pending_transfer_has_different_credit_account_id = 28,

  /**
  * See [pending_transfer_has_different_ledger](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_has_different_ledger)
  */
  pending_transfer_has_different_ledger = 29,

  /**
  * See [pending_transfer_has_different_code](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_has_different_code)
  */
  pending_transfer_has_different_code = 30,

  /**
  * See [exceeds_pending_transfer_amount](https://docs.tigerbeetle.com/reference/operations/create_transfers#exceeds_pending_transfer_amount)
  */
  exceeds_pending_transfer_amount = 31,

  /**
  * See [pending_transfer_has_different_amount](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_has_different_amount)
  */
  pending_transfer_has_different_amount = 32,

  /**
  * See [pending_transfer_already_posted](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_already_posted)
  */
  pending_transfer_already_posted = 33,

  /**
  * See [pending_transfer_already_voided](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_already_voided)
  */
  pending_transfer_already_voided = 34,

  /**
  * See [pending_transfer_expired](https://docs.tigerbeetle.com/reference/operations/create_transfers#pending_transfer_expired)
  */
  pending_transfer_expired = 35,

  /**
  * See [exists_with_different_flags](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_flags)
  */
  exists_with_different_flags = 36,

  /**
  * See [exists_with_different_debit_account_id](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_debit_account_id)
  */
  exists_with_different_debit_account_id = 37,

  /**
  * See [exists_with_different_credit_account_id](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_credit_account_id)
  */
  exists_with_different_credit_account_id = 38,

  /**
  * See [exists_with_different_amount](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_amount)
  */
  exists_with_different_amount = 39,

  /**
  * See [exists_with_different_pending_id](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_pending_id)
  */
  exists_with_different_pending_id = 40,

  /**
  * See [exists_with_different_user_data_128](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_user_data_128)
  */
  exists_with_different_user_data_128 = 41,

  /**
  * See [exists_with_different_user_data_64](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_user_data_64)
  */
  exists_with_different_user_data_64 = 42,

  /**
  * See [exists_with_different_user_data_32](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_user_data_32)
  */
  exists_with_different_user_data_32 = 43,

  /**
  * See [exists_with_different_timeout](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_timeout)
  */
  exists_with_different_timeout = 44,

  /**
  * See [exists_with_different_code](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists_with_different_code)
  */
  exists_with_different_code = 45,

  /**
  * See [exists](https://docs.tigerbeetle.com/reference/operations/create_transfers#exists)
  */
  exists = 46,

  /**
  * See [overflows_debits_pending](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_debits_pending)
  */
  overflows_debits_pending = 47,

  /**
  * See [overflows_credits_pending](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_credits_pending)
  */
  overflows_credits_pending = 48,

  /**
  * See [overflows_debits_posted](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_debits_posted)
  */
  overflows_debits_posted = 49,

  /**
  * See [overflows_credits_posted](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_credits_posted)
  */
  overflows_credits_posted = 50,

  /**
  * See [overflows_debits](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_debits)
  */
  overflows_debits = 51,

  /**
  * See [overflows_credits](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_credits)
  */
  overflows_credits = 52,

  /**
  * See [overflows_timeout](https://docs.tigerbeetle.com/reference/operations/create_transfers#overflows_timeout)
  */
  overflows_timeout = 53,

  /**
  * See [exceeds_credits](https://docs.tigerbeetle.com/reference/operations/create_transfers#exceeds_credits)
  */
  exceeds_credits = 54,

  /**
  * See [exceeds_debits](https://docs.tigerbeetle.com/reference/operations/create_transfers#exceeds_debits)
  */
  exceeds_debits = 55,
}

export type CreateAccountsError = {
  index: number
  result: CreateAccountError
}

export type CreateTransfersError = {
  index: number
  result: CreateTransferError
}


/**
* See [AccountFilter](https://docs.tigerbeetle.com/reference/account_filter#)
*/
export type AccountFilter = {

  /**
  * See [account_id](https://docs.tigerbeetle.com/reference/account_filter#account_id)
  */
  account_id: bigint

  /**
  * See [timestamp_min](https://docs.tigerbeetle.com/reference/account_filter#timestamp_min)
  */
  timestamp_min: bigint

  /**
  * See [timestamp_max](https://docs.tigerbeetle.com/reference/account_filter#timestamp_max)
  */
  timestamp_max: bigint

  /**
  * See [limit](https://docs.tigerbeetle.com/reference/account_filter#limit)
  */
  limit: number

  /**
  * See [flags](https://docs.tigerbeetle.com/reference/account_filter#flags)
  */
  flags: number
}


/**
* See [AccountBalance](https://docs.tigerbeetle.com/reference/account_balances#)
*/
export type AccountBalance = {

  /**
  * See [debits_pending](https://docs.tigerbeetle.com/reference/account_balances#debits_pending)
  */
  debits_pending: bigint

  /**
  * See [debits_posted](https://docs.tigerbeetle.com/reference/account_balances#debits_posted)
  */
  debits_posted: bigint

  /**
  * See [credits_pending](https://docs.tigerbeetle.com/reference/account_balances#credits_pending)
  */
  credits_pending: bigint

  /**
  * See [credits_posted](https://docs.tigerbeetle.com/reference/account_balances#credits_posted)
  */
  credits_posted: bigint

  /**
  * See [timestamp](https://docs.tigerbeetle.com/reference/account_balances#timestamp)
  */
  timestamp: bigint
}

export enum Operation {
  create_accounts = 128,
  create_transfers = 129,
  lookup_accounts = 130,
  lookup_transfers = 131,
  get_account_transfers = 132,
  get_account_history = 133,
  expire_pending_transfers = 134,
}

