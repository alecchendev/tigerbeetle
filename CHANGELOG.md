# TigerBeetle Changelog

## 2024-07-08 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#2035](https://github.com/tigerbeetle/tigerbeetle/pull/2035),
  [#2042](https://github.com/tigerbeetle/tigerbeetle/pull/2042),
  [#2069](https://github.com/tigerbeetle/tigerbeetle/pull/2069)

  Strengthen LSM assertions.

- [#2077](https://github.com/tigerbeetle/tigerbeetle/pull/2077)

  Use flexible quorums for clock synchronization.

### Features

- [#2037](https://github.com/tigerbeetle/tigerbeetle/pull/2037)

  Improve and clarify balancing transfer `amount` validation.

### Internals

- [#2063](https://github.com/tigerbeetle/tigerbeetle/pull/2063)

  Add chaitanyabhandari to the list of release managers.

- [#2075](https://github.com/tigerbeetle/tigerbeetle/pull/2075)

  Update TigerStyle with advice for splitting long functions.

- [#2068](https://github.com/tigerbeetle/tigerbeetle/pull/2068),
  [#2074](https://github.com/tigerbeetle/tigerbeetle/pull/2074)

  Fix flaky tests.

- [#1995](https://github.com/tigerbeetle/tigerbeetle/pull/1995)

  Add `--security-opt seccomp=unconfined` to Docker commands in docs, since newer versions of Docker
  block access to io_uring.

- [#2047](https://github.com/tigerbeetle/tigerbeetle/pull/2047),
  [#2064](https://github.com/tigerbeetle/tigerbeetle/pull/2064),
  [#2079](https://github.com/tigerbeetle/tigerbeetle/pull/2079)

  Clean up github actions workflows.

- [#2071](https://github.com/tigerbeetle/tigerbeetle/pull/2071)

  Make cfo supervisor robust to network errors.

### TigerTracks 🎧

- [Линия жизни](https://open.spotify.com/track/2dpGc40PtSLEeNAGrTnJGI?si=9c3d6e45632147c4)

## 2024-07-01 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#2058](https://github.com/tigerbeetle/tigerbeetle/pull/2058)

  `tigerbeetle benchmark` command can now simulate few "hot" accounts which account for most of
  transfers, the distribution expected in a typical deployment.

### Features

- [#2040](https://github.com/tigerbeetle/tigerbeetle/pull/2040)

  Add a recipe for accounts with bounded balance

### Internals

- [#2033](https://github.com/tigerbeetle/tigerbeetle/pull/2033),
  [#2041](https://github.com/tigerbeetle/tigerbeetle/pull/2041)

  Rewrite `build.zig` to introduce a more regular naming scheme for top-level steps.

- [#2057](https://github.com/tigerbeetle/tigerbeetle/pull/2057)

  Our internal dashboard, [devhub](https://tigerbeetle.github.io/tigerbeetle/) now has dark mode 😎.

- [#2052](https://github.com/tigerbeetle/tigerbeetle/pull/2052),
  [#2032](https://github.com/tigerbeetle/tigerbeetle/pull/2032),
  [#2044](https://github.com/tigerbeetle/tigerbeetle/pull/2044)

  Ensure that the generated `tb_client.h` C header is in sync with Zig code.


### TigerTracks 🎧

- [Wish You Were Here](https://open.spotify.com/track/7aE5WXu5sFeNRh3Z05wwu4?si=317f6e0302cc4040)

## 2024-06-24 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#2034](https://github.com/tigerbeetle/tigerbeetle/pull/2034),
  [#2022](https://github.com/tigerbeetle/tigerbeetle/pull/2022),
  [#2023](https://github.com/tigerbeetle/tigerbeetle/pull/2023)

  Fuzzer Fixing For Fun! Particularly around random number generation and number sequences.

- [#2004](https://github.com/tigerbeetle/tigerbeetle/pull/2004)

  Add simulator coverage for `get_account_transfers` and `get_account_balances`.

### Features

- [#2010](https://github.com/tigerbeetle/tigerbeetle/pull/2010)

  Reduce the default `--limit-pipeline-requests` value, dropping RSS memory consumption.

### Internals

- [#2024](https://github.com/tigerbeetle/tigerbeetle/pull/2024),
  [#2018](https://github.com/tigerbeetle/tigerbeetle/pull/2018),
  [#2027](https://github.com/tigerbeetle/tigerbeetle/pull/2027)

  Build system simplifications.

- [#2026](https://github.com/tigerbeetle/tigerbeetle/pull/2026),
  [#2020](https://github.com/tigerbeetle/tigerbeetle/pull/2020),
  [#2030](https://github.com/tigerbeetle/tigerbeetle/pull/2030),
  [#2031](https://github.com/tigerbeetle/tigerbeetle/pull/2031),
  [#2008](https://github.com/tigerbeetle/tigerbeetle/pull/2008)

  Tidying up (now) unused symbols and functionality.

- [#2016](https://github.com/tigerbeetle/tigerbeetle/pull/2016)

  Rename docs section from "Develop" to "Coding".

### TigerTracks 🎧

- [On The Riverbank](https://open.spotify.com/track/0zfluauTutYrU13nEV2zyc?si=5278f387bfdd4dbc)

## 2024-06-17 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#2000](https://github.com/tigerbeetle/tigerbeetle/pull/2000)

  Fix a case where an early return could result in a partially inserted transfer persisting.

- [#2011](https://github.com/tigerbeetle/tigerbeetle/pull/2011),
  [#2009](https://github.com/tigerbeetle/tigerbeetle/pull/2009),
  [#1981](https://github.com/tigerbeetle/tigerbeetle/pull/1981)

  Big improvements to allowing TigerBeetle to run with less memory! You can now run TigerBeetle
  in `--development` mode by default with an RSS of under 1GB. Most of these gains came from #1981
  which allows running with a smaller runtime request size.

- [#2014](https://github.com/tigerbeetle/tigerbeetle/pull/2014),
  [#2012](https://github.com/tigerbeetle/tigerbeetle/pull/2012),
  [#2006](https://github.com/tigerbeetle/tigerbeetle/pull/2006)

  Devhub improvements - make it harder to miss failures due to visualization bugs, show the PR
  author in fuzzer table and color canary "failures" as success.

### Features

- [#2001](https://github.com/tigerbeetle/tigerbeetle/pull/2001)

  Add `--account-batch-size` to the benchmark, mirroring `--transfer-batch-size`.

- [#2017](https://github.com/tigerbeetle/tigerbeetle/pull/2017),
  [#1992](https://github.com/tigerbeetle/tigerbeetle/pull/1992),
  [#1993](https://github.com/tigerbeetle/tigerbeetle/pull/1993)

  Rename the Deploy section to Operating, add a new correcting transfer recipe, and note that
  `lookup_accounts` shouldn't be used before creating transfers to avoid potential TOCTOUs.

### Internals

- [#1878](https://github.com/tigerbeetle/tigerbeetle/pull/1878),
  [#1997](https://github.com/tigerbeetle/tigerbeetle/pull/1997)

  ⚡ Update Zig from 0.11.0 to 0.13.0! As part of this, replace non-mutated `var`s with `const`.

- [#1999](https://github.com/tigerbeetle/tigerbeetle/pull/1999)

  Similar to #1991, adds the async `io_uring_prep_statx` syscall for Linux's IO implementation,
  allowing non-blocking `statx()`s while serving requests - to determine when the binary on
  disk has changed.


### TigerTracks 🎧

- [Canon in D](https://www.youtube.com/watch?v=Ptk_1Dc2iPY)

## 2024-06-10 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1986](https://github.com/tigerbeetle/tigerbeetle/pull/1986)

  Refactor an internal iterator to expose a mutable pointer instead of calling `@constCast` on it.
  There was a comment justifying the operation's safety, but it turned out to be safer to expose
  it as a mutable pointer (avoiding misusage from the origin) rather than performing an unsound
  mutation over a constant pointer.

- [#1985](https://github.com/tigerbeetle/tigerbeetle/pull/1985)

  Implement a random Grid/Scrubber tour origin, where each replica starts scrubbing the local
  storage in a different place, covering more blocks across the entire cluster.

- [#1990](https://github.com/tigerbeetle/tigerbeetle/pull/1990)

  Model and calculate the probability of data loss in terms of the Grid/Scrubber cycle interval,
  allowing to reduce the read bandwidth dedicated for scrubbing.

- [#1987](https://github.com/tigerbeetle/tigerbeetle/pull/1987)

  Fix a simulator bug where all the WAL sectors get corrupted when a replica crashes while writing
  them simultaneously.

### Internals

- [#1991](https://github.com/tigerbeetle/tigerbeetle/pull/1991)

  As part of multiversioning binaries, adds the async `io_uring_prep_openat`syscall for Linux's IO
  implementation, allowing non-blocking `open()`s while serving requests (which will be necessary
  during upgrade checks).

- [#1982](https://github.com/tigerbeetle/tigerbeetle/pull/1982)

  Require the `--experimental` flag when starting TigerBeetle with flags that aren't considered
  stable, that is, flags not explicitly documented in the help message, limiting the surface area
  for future compatibility.

### TigerTracks 🎧

- [O Rappa - A feira](https://www.youtube.com/watch?v=GmaFGnUnM1U)

## 2024-06-03 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1980](https://github.com/tigerbeetle/tigerbeetle/pull/1980)

  Fix crash when upgrading solo replica.

- [#1952](https://github.com/tigerbeetle/tigerbeetle/pull/1952)

  Pin points crossing Go client FFI boundary to prevent memory corruption.

### Internals

- [#1931](https://github.com/tigerbeetle/tigerbeetle/pull/1931),
  [#1933](https://github.com/tigerbeetle/tigerbeetle/pull/1933)

  Improve Go client tests.

- [#1946](https://github.com/tigerbeetle/tigerbeetle/pull/1946)

  Add `vsr.Client.register()`.

## 2024-05-27 (No release: Queued up for upcoming multi-version binary release)

### Features

- [#1975](https://github.com/tigerbeetle/tigerbeetle/pull/1975)

  Build our .NET client for .NET 8, the current LTS version. Thanks @woksin!

### Internals

- [#1971](https://github.com/tigerbeetle/tigerbeetle/pull/1971)

  Document recovery case `@L` in VSR.

- [#1965](https://github.com/tigerbeetle/tigerbeetle/pull/1965)

  We implicitly supported underscores in numerical CLI flags. Add tests to make this explicit.

- [#1974](https://github.com/tigerbeetle/tigerbeetle/pull/1974),
  [#1970](https://github.com/tigerbeetle/tigerbeetle/pull/1970)

  Add the size of an empty data file to [devhub](https://tigerbeetle.github.io/tigerbeetle/),
  tweak the benchmark to always generate the same sized batches, and speed up loading the
  devhub itself.

### TigerTracks 🎧

- [Fight Song](https://www.youtube.com/watch?v=xo1VInw-SKc)

## 2024-05-20 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1938](https://github.com/tigerbeetle/tigerbeetle/pull/1938)

  Ease restriction which guarded against unnecessary pulses.

### Internals

- [#1949](https://github.com/tigerbeetle/tigerbeetle/pull/1949),
  [#1964](https://github.com/tigerbeetle/tigerbeetle/pull/1964)

  Docs fixes and cleanup.

- [#1957](https://github.com/tigerbeetle/tigerbeetle/pull/1957)

  Fix determinism bug in test workload checker.

- [#1955](https://github.com/tigerbeetle/tigerbeetle/pull/1955)

  Expose `ticks_max` as runtime CLI argument.

- [#1956](https://github.com/tigerbeetle/tigerbeetle/pull/1956),
  [#1959](https://github.com/tigerbeetle/tigerbeetle/pull/1959),
  [#1960](https://github.com/tigerbeetle/tigerbeetle/pull/1960),
  [#1963](https://github.com/tigerbeetle/tigerbeetle/pull/1963)

  Devhub/benchmark improvements.

## 2024-05-13 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance
- [#1918](https://github.com/tigerbeetle/tigerbeetle/pull/1918),
  [#1916](https://github.com/tigerbeetle/tigerbeetle/pull/1916),
  [#1913](https://github.com/tigerbeetle/tigerbeetle/pull/1913),
  [#1921](https://github.com/tigerbeetle/tigerbeetle/pull/1921),
  [#1922](https://github.com/tigerbeetle/tigerbeetle/pull/1922),
  [#1920](https://github.com/tigerbeetle/tigerbeetle/pull/1920),
  [#1945](https://github.com/tigerbeetle/tigerbeetle/pull/1945),
  [#1941](https://github.com/tigerbeetle/tigerbeetle/pull/1941),
  [#1934](https://github.com/tigerbeetle/tigerbeetle/pull/1934),
  [#1927](https://github.com/tigerbeetle/tigerbeetle/pull/1927)

  Lots of CFO enhancements - the CFO can now do simple minimization, fuzz PRs and orchestrate the
  VOPR directly. See the output on our [devhub](https://tigerbeetle.github.io/tigerbeetle/)!

- [#1948](https://github.com/tigerbeetle/tigerbeetle/pull/1948),
  [#1929](https://github.com/tigerbeetle/tigerbeetle/pull/1929),
  [#1924](https://github.com/tigerbeetle/tigerbeetle/pull/1924)

  Fix a bug in the VOPR, add simple minimization, and remove the voprhub code. Previously, the
  voprhub is what took care of running the VOPR. Now, it's handled by the CFO and treated much
  the same as other fuzzers.

- [#1947](https://github.com/tigerbeetle/tigerbeetle/pull/1947)

  Prevent time-travel in our replica test code.

- [#1943](https://github.com/tigerbeetle/tigerbeetle/pull/1943)

  Fix a fuzzer bug around checkpoint / commit ratios.

### Features

- [#1898](https://github.com/tigerbeetle/tigerbeetle/pull/1898)

  Add the ability to limit the VSR pipeline size at runtime to save memory.

### Internals
- [#1925](https://github.com/tigerbeetle/tigerbeetle/pull/1925)

  Fix path handling on Windows by switching to `NtCreateFile`. Before, TigerBeetle would silently
  treat all paths as relative on Windows.

- [#1917](https://github.com/tigerbeetle/tigerbeetle/pull/1917)

  In preparation for multiversion binaries, make `release_client_min` a parameter, set by
  `release.zig`. This allows us to ensure backwards compatibility with older clients.

- [#1827](https://github.com/tigerbeetle/tigerbeetle/pull/1827)

  Add some additional asserts around block lifetimes in compaction.

- [#1939](https://github.com/tigerbeetle/tigerbeetle/pull/1939)

  Fix parsing of multiple CLI positional fields.

- [#1923](https://github.com/tigerbeetle/tigerbeetle/pull/1923)

  Remove `main_pkg_path = src/` early, to help us be compatible with Zig 0.12.

- [#1937](https://github.com/tigerbeetle/tigerbeetle/pull/1937),
  [#1912](https://github.com/tigerbeetle/tigerbeetle/pull/1912),
  [#1852](https://github.com/tigerbeetle/tigerbeetle/pull/1852)

  Docs organization and link fixes.

### TigerTracks 🎧

- [Thank You (Not So Bad)](https://www.youtube.com/watch?v=fQWNeIiFf_s)

## 2024-05-06 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1906](https://github.com/tigerbeetle/tigerbeetle/pull/1906),
  [#1904](https://github.com/tigerbeetle/tigerbeetle/pull/1904),
  [#1903](https://github.com/tigerbeetle/tigerbeetle/pull/1903),
  [#1901](https://github.com/tigerbeetle/tigerbeetle/pull/1901),
  [#1899](https://github.com/tigerbeetle/tigerbeetle/pull/1899),
  [#1886](https://github.com/tigerbeetle/tigerbeetle/pull/1886)

  Fixes and performance improvements to fuzzers.

- [#1897](https://github.com/tigerbeetle/tigerbeetle/pull/1897)

  Reduces cache size for the `--development` flag, which was originally created to bypass direct
  I/O requirements but can also aggregate other convenient options for non-production environments.

- [#1895](https://github.com/tigerbeetle/tigerbeetle/pull/1895)

  Reduction in memory footprint, calculating the maximum number of messages from runtime-known
  configurations.

### Features

- [#1896](https://github.com/tigerbeetle/tigerbeetle/pull/1896)

  Removes the `bootstrap.{sh,bat}` scripts, replacing them with a more transparent instruction for
  downloading the binary release or building from source.

- [#1890](https://github.com/tigerbeetle/tigerbeetle/pull/1890)

  Nicely handles "illegal instruction" crashes, printing a friendly message when the CPU running a
  binary release is too old and does not support some modern instructions such as AES-NI and AVX2.

### Internals

- [#1892](https://github.com/tigerbeetle/tigerbeetle/pull/1892)

  Include micro-benchmarks as part of the unit tests, so there's no need for a special case in the
  CI while we still compile and check them.

- [#1902](https://github.com/tigerbeetle/tigerbeetle/pull/1902)

  A TigerStyle addition on "why prefer a explicitly sized integer over `usize`".

- [#1894](https://github.com/tigerbeetle/tigerbeetle/pull/1894)

  Rename "Getting Started" to "Quick Start" for better organization and clarifications.

- [#1900](https://github.com/tigerbeetle/tigerbeetle/pull/1900)

  While TigerBeetle builds are deterministic, Zip files include a timestamp that makes the build
  output non-deterministic! This PR sets an explicit timestamp for entirely reproducible releases.

- [1909](https://github.com/tigerbeetle/tigerbeetle/pull/1909)

  Extracts the zig compiler path into a `ZIG_EXE` environment variable, allowing easier sharing of
  the same compiler across multiple git work trees.

### TigerTracks 🎧

- [Thank You](https://www.youtube.com/watch?v=1TO48Cnl66w)

## 2024-04-29 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1883](https://github.com/tigerbeetle/tigerbeetle/pull/1883)

  Move message allocation farther down into the `tigerbeetle start` code path.
  `tigerbeetle format` is now faster, since it no longer allocates these messages.

- [#1880](https://github.com/tigerbeetle/tigerbeetle/pull/1880)

  Reduce the connection limit, which was unnecessarily high.

### Features

- [#1848](https://github.com/tigerbeetle/tigerbeetle/pull/1848)

  Implement zig-zag merge join for merging index scans.
  (Note that this functionality is not yet exposed to TigerBeetle's API.)

- [#1882](https://github.com/tigerbeetle/tigerbeetle/pull/1882)

  Print memory usage more accurately during `tigerbeetle start`.

### Internals

- [#1874](https://github.com/tigerbeetle/tigerbeetle/pull/1874)

  Fix blob-size CI check with respect to shallow clones.

- [#1870](https://github.com/tigerbeetle/tigerbeetle/pull/1870),
  [#1869](https://github.com/tigerbeetle/tigerbeetle/pull/1869)

  Add more fuzzers to CFO (Continuous Fuzzing Orchestrator).

- [#1868](https://github.com/tigerbeetle/tigerbeetle/pull/1868),
  [#1875](https://github.com/tigerbeetle/tigerbeetle/pull/1875)

  Improve fuzzer performance.

- [#1864](https://github.com/tigerbeetle/tigerbeetle/pull/1864)

  On the devhub, show at most one failing seed per fuzzer.

- [#1820](https://github.com/tigerbeetle/tigerbeetle/pull/1820),
  [#1867](https://github.com/tigerbeetle/tigerbeetle/pull/1867),
  [#1877](https://github.com/tigerbeetle/tigerbeetle/pull/1877),
  [#1873](https://github.com/tigerbeetle/tigerbeetle/pull/1873),
  [#1853](https://github.com/tigerbeetle/tigerbeetle/pull/1853),
  [#1872](https://github.com/tigerbeetle/tigerbeetle/pull/1872),
  [#1845](https://github.com/tigerbeetle/tigerbeetle/pull/1845),
  [#1871](https://github.com/tigerbeetle/tigerbeetle/pull/1871)

  Documentation improvements.

### TigerTracks 🎧

- [The Core](https://open.spotify.com/track/62DOxN9FeTsR0J0ccnBhMu?si=5b0a7b8974d54e4d)

## 2024-04-22 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1851](https://github.com/tigerbeetle/tigerbeetle/pull/1851)

  Implement grid scrubbing --- a background job that periodically reads the entire data file,
  verifies its correctness and repairs any corrupted blocks.

- [#1855](https://github.com/tigerbeetle/tigerbeetle/pull/1855),
  [#1854](https://github.com/tigerbeetle/tigerbeetle/pull/1854).

  Turn on continuous fuzzing and integrate it with
  [devhub](https://tigerbeetle.github.io/tigerbeetle/).

### Internals

- [#1849](https://github.com/tigerbeetle/tigerbeetle/pull/1849)

  Improve navigation on the docs website.

### TigerTracks 🎧

A very special song from our friend [MEGAHIT](https://www.megahit.hu)!

- [TigerBeetle](https://open.spotify.com/track/66pxevn7ImjMDozcs1TE3Q?si=dfbbf7b80179481e)

## 2024-04-15 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1810](https://github.com/tigerbeetle/tigerbeetle/pull/1810)

  Incrementally recompute the number values to compact in the storage engine. This smooths out I/O
  latency, giving a nice bump to transaction throughput under load.

### Features

- [#1843](https://github.com/tigerbeetle/tigerbeetle/pull/1843)

  Add `--development` flag to `format` and `start` commands in production binaries to downgrade
  lack of Direct I/O support from a hard error to a warning.

  TigerBeetle uses Direct I/O for certain safety guarantees, but this feature is not available on
  all development environments due to varying file systems. This serves as a compromise between
  providing a separate development release binary and strictly requiring Direct I/O to be present.

### Internals

- [#1833](https://github.com/tigerbeetle/tigerbeetle/pull/1833)

  Add fixed upper bound to loop in the StorageChecker.

- [#1836](https://github.com/tigerbeetle/tigerbeetle/pull/1836)

  Orchestrate continuous fuzzing of tigerbeetle components straight from the build system! This
  gives us some flexibility on configuring our set of machines which test and report errors.

- [#1842](https://github.com/tigerbeetle/tigerbeetle/pull/1842),
  [#1844](https://github.com/tigerbeetle/tigerbeetle/pull/1844),
  [#1832](https://github.com/tigerbeetle/tigerbeetle/pull/1832)

  Styling updates and fixes.

### TigerTracks 🎧

- [CHERRY PEPSI](https://www.youtube.com/watch?v=D5Avlh980k4)


## 2024-04-08 (No release: Queued up for upcoming multi-version binary release)

### Safety And Performance

- [#1821](https://github.com/tigerbeetle/tigerbeetle/pull/1821)

  Fix a case the VOPR found where a replica recovers into `recovering_head` unexpectedly.

### Features

- [#1565](https://github.com/tigerbeetle/tigerbeetle/pull/1565)

  Improve CLI errors around sizing by providing human readable (1057MiB vs 1108344832) values.

- [#1818](https://github.com/tigerbeetle/tigerbeetle/pull/1818),
  [#1831](https://github.com/tigerbeetle/tigerbeetle/pull/1831),
  [#1829](https://github.com/tigerbeetle/tigerbeetle/pull/1829),
  [#1817](https://github.com/tigerbeetle/tigerbeetle/pull/1817),
  [#1826](https://github.com/tigerbeetle/tigerbeetle/pull/1826),
  [#1825](https://github.com/tigerbeetle/tigerbeetle/pull/1825)

  Documentation improvements.

### Internals

- [#1806](https://github.com/tigerbeetle/tigerbeetle/pull/1806)

  Additional LSM compaction comments and assertions.

- [#1824](https://github.com/tigerbeetle/tigerbeetle/pull/1824)

  Clarify some scan internals and add additional assertions.

- [#1828](https://github.com/tigerbeetle/tigerbeetle/pull/1828)

  Some of our comments had duplicate words - thanks @divdeploy for for noticing!

### TigerTracks 🎧

- [All The Small Things](https://www.youtube.com/watch?v=Sn0gVjPrUj0)

## 2024-04-01 (Placeholder: no release yet)

### Safety And Performance

- [#1766](https://github.com/tigerbeetle/tigerbeetle/pull/1766)

  Reject incoming client requests that have an unexpected message length.

- [#1768](https://github.com/tigerbeetle/tigerbeetle/pull/1768)

  Fix message alignment.

- [#1772](https://github.com/tigerbeetle/tigerbeetle/pull/1772),
  [#1786](https://github.com/tigerbeetle/tigerbeetle/pull/1786)

  `StorageChecker` now verifies grid determinism at bar boundaries.

- [#1776](https://github.com/tigerbeetle/tigerbeetle/pull/1776)

  Fix VOPR liveness false positive when standby misses an op.

- [#1814](https://github.com/tigerbeetle/tigerbeetle/pull/1814)

  Assert that the type-erased LSM block metadata matches the comptime one, specialized over `Tree`.

- [#1797](https://github.com/tigerbeetle/tigerbeetle/pull/1797)

  Use a FIFO as a block_pool instead of trying to slice arrays during compaction.

### Features

- [#1774](https://github.com/tigerbeetle/tigerbeetle/pull/1774)

  Implement `get_account_transfers` and `get_account_balances` in the REPL.

- [#1781](https://github.com/tigerbeetle/tigerbeetle/pull/1781),
  [#1784](https://github.com/tigerbeetle/tigerbeetle/pull/1784),
  [#1765](https://github.com/tigerbeetle/tigerbeetle/pull/1765),
  [#1816](https://github.com/tigerbeetle/tigerbeetle/pull/1816),
  [#1808](https://github.com/tigerbeetle/tigerbeetle/pull/1808),
  [#1802](https://github.com/tigerbeetle/tigerbeetle/pull/1802),
  [#1798](https://github.com/tigerbeetle/tigerbeetle/pull/1798),
  [#1793](https://github.com/tigerbeetle/tigerbeetle/pull/1793),
  [#1805](https://github.com/tigerbeetle/tigerbeetle/pull/1805)

  Documentation improvements.

- [#1813](https://github.com/tigerbeetle/tigerbeetle/pull/1813)

  Improve Docker experience by handling `SIGTERM` through [tini](https://github.com/krallin/tini).

- [#1800](https://github.com/tigerbeetle/tigerbeetle/pull/1800)

  For reproducible benchmarks, allow setting `--seed` on the CLI.

### Internals

- [#1640](https://github.com/tigerbeetle/tigerbeetle/pull/1640),
  [#1782](https://github.com/tigerbeetle/tigerbeetle/pull/1782),
  [#1788](https://github.com/tigerbeetle/tigerbeetle/pull/1788)

  Move `request_queue` outside of `vsr.Client`.

- [#1775](https://github.com/tigerbeetle/tigerbeetle/pull/1775)

  Extract `CompactionPipeline` to a dedicated function.

- [#1773](https://github.com/tigerbeetle/tigerbeetle/pull/1773)

  Replace compaction interface with comptime dispatch.

- [#1796](https://github.com/tigerbeetle/tigerbeetle/pull/1796)

  Remove the duplicated `CompactionInfo` value stored in `PipelineSlot`,
  referencing it from the `Compaction` by its coordinates.

- [#1809](https://github.com/tigerbeetle/tigerbeetle/pull/1809),
  [#1807](https://github.com/tigerbeetle/tigerbeetle/pull/1807)

  CLI output improvements.

- [#1804](https://github.com/tigerbeetle/tigerbeetle/pull/1804),
  [#1812](https://github.com/tigerbeetle/tigerbeetle/pull/1812),
  [#1799](https://github.com/tigerbeetle/tigerbeetle/pull/1799),
  [#1767](https://github.com/tigerbeetle/tigerbeetle/pull/1767)

  Improvements in the client libraries CI.

- [#1771](https://github.com/tigerbeetle/tigerbeetle/pull/1771),
  [#1770](https://github.com/tigerbeetle/tigerbeetle/pull/1770),
  [#1792](https://github.com/tigerbeetle/tigerbeetle/pull/1792)

  Metrics adjustments for Devhub and Nyrkio integration.

- [#1811](https://github.com/tigerbeetle/tigerbeetle/pull/1811),
  [#1803](https://github.com/tigerbeetle/tigerbeetle/pull/1803),
  [#1801](https://github.com/tigerbeetle/tigerbeetle/pull/1801),
  [#1762](https://github.com/tigerbeetle/tigerbeetle/pull/1762)

  Various bug fixes in the build script and removal of the "Do not use in production" warning.

## 2024-03-19

- Bump version to 0.15.x
- Starting with 0.15.x, TigerBeetle is ready for production use, preserves durability and
  provides a forward upgrade path through storage stability.

### Safety And Performance
- [#1755](https://github.com/tigerbeetle/tigerbeetle/pull/1755)

  Set TigerBeetle's block size to 512KB.

  Previously, we used to have a block size of 1MB to help with approximate pacing. Now that pacing
  can be tuned independently of block size, reduce this value (but not too much - make the roads
  wider than you think) to help with read amplification on queries.

### TigerTracks 🎧

- [Immigrant Song - Live 1972](https://open.spotify.com/track/2aH2dcPnwoQwhLsXFezU2r?si=eead2c0cd17c429e)

## 2024-03-18

### Safety And Performance

- [#1660](https://github.com/tigerbeetle/tigerbeetle/pull/1660)

  Implement compaction pacing: traditionally LSM databases run compaction on a background thread.
  In contrast compaction in tigerbeetle is deterministically interleaved with normal execution
  process, to get predictable latencies and to guarantee that ingress can never outrun compaction.

  In this PR, this "deterministic scheduling" is greatly improved, slicing compaction work into
  smaller bites which are more evenly distributed across a bar of batched requests.

- [#1722](https://github.com/tigerbeetle/tigerbeetle/pull/1722)

  Include information about tigerbeetle version into the VSR protocol and the data file.

- [#1732](https://github.com/tigerbeetle/tigerbeetle/pull/1732),
  [#1743](https://github.com/tigerbeetle/tigerbeetle/pull/1743),
  [#1742](https://github.com/tigerbeetle/tigerbeetle/pull/1742),
  [#1720](https://github.com/tigerbeetle/tigerbeetle/pull/1720),
  [#1719](https://github.com/tigerbeetle/tigerbeetle/pull/1719),
  [#1705](https://github.com/tigerbeetle/tigerbeetle/pull/1705),
  [#1708](https://github.com/tigerbeetle/tigerbeetle/pull/1708),
  [#1707](https://github.com/tigerbeetle/tigerbeetle/pull/1707),
  [#1723](https://github.com/tigerbeetle/tigerbeetle/pull/1723),
  [#1706](https://github.com/tigerbeetle/tigerbeetle/pull/1706),
  [#1700](https://github.com/tigerbeetle/tigerbeetle/pull/1700),
  [#1696](https://github.com/tigerbeetle/tigerbeetle/pull/1696),
  [#1686](https://github.com/tigerbeetle/tigerbeetle/pull/1686).

  Many availability issues found by the simulator fixed!

- [#1734](https://github.com/tigerbeetle/tigerbeetle/pull/1734)

  Fix a buffer leak when `get_account_balances` is called on an invalid account.


### Features

- [#1671](https://github.com/tigerbeetle/tigerbeetle/pull/1671),
  [#1713](https://github.com/tigerbeetle/tigerbeetle/pull/1713),
  [#1709](https://github.com/tigerbeetle/tigerbeetle/pull/1709),
  [#1688](https://github.com/tigerbeetle/tigerbeetle/pull/1688),
  [#1691](https://github.com/tigerbeetle/tigerbeetle/pull/1691),
  [#1690](https://github.com/tigerbeetle/tigerbeetle/pull/1690).

  Many improvements to the documentation!

- [#1733](https://github.com/tigerbeetle/tigerbeetle/pull/1733)

  Rename `get_account_history` to `get_account_balances`.

- [#1657](https://github.com/tigerbeetle/tigerbeetle/pull/1657)

  Automatically expire pending transfers.

- [#1682](https://github.com/tigerbeetle/tigerbeetle/pull/1682)

  Implement in-place upgrades, so that the version of tigerbeetle binary can be updated without
  recreating the data file from scratch.

- [#1674](https://github.com/tigerbeetle/tigerbeetle/pull/1674)

  Consistently use `MiB` rather than `MB` in the CLI interface.

- [#1678](https://github.com/tigerbeetle/tigerbeetle/pull/1678)

  Mark `--standby` and `benchmark` CLI arguments as experimental.

### Internals

- [#1726](https://github.com/tigerbeetle/tigerbeetle/pull/1726)

  Unify PostedGroove and the index pending_status.

- [#1681](https://github.com/tigerbeetle/tigerbeetle/pull/1681)

  Include an entire header into checkpoint state to ease recovery after state sync.


### TigerTracks 🎧

- [Are You Gonna Go My Way](https://open.spotify.com/track/4LQOa4kXu0QAD88nMpr4fA?si=f7faf501919942b5)

## 2024-03-11

### Safety And Performance

- [#1663](https://github.com/tigerbeetle/tigerbeetle/pull/1663)

  Fetching account history and transfers now has unit tests, helping detect and fix a reported bug
  with posting and voiding transfers.

### Internals

- [#1648](https://github.com/tigerbeetle/tigerbeetle/pull/1648),
  [#1665](https://github.com/tigerbeetle/tigerbeetle/pull/1665),
  [#1654](https://github.com/tigerbeetle/tigerbeetle/pull/1654),
  [#1651](https://github.com/tigerbeetle/tigerbeetle/pull/1651)

  Testing and Timer logic was subject to some spring cleaning.

### Features

- [#1656](https://github.com/tigerbeetle/tigerbeetle/pull/1656),
  [#1659](https://github.com/tigerbeetle/tigerbeetle/pull/1659),
  [#1666](https://github.com/tigerbeetle/tigerbeetle/pull/1666),
  [#1667](https://github.com/tigerbeetle/tigerbeetle/pull/1667),
  [#1667](https://github.com/tigerbeetle/tigerbeetle/pull/1670)

  Preparation for in-place upgrade support.

- [#1633](https://github.com/tigerbeetle/tigerbeetle/pull/1633),
  [#1661](https://github.com/tigerbeetle/tigerbeetle/pull/1661),
  [#1652](https://github.com/tigerbeetle/tigerbeetle/pull/1652),
  [#1647](https://github.com/tigerbeetle/tigerbeetle/pull/1647),
  [#1637](https://github.com/tigerbeetle/tigerbeetle/pull/1637),
  [#1638](https://github.com/tigerbeetle/tigerbeetle/pull/1638),
  [#1655](https://github.com/tigerbeetle/tigerbeetle/pull/1655)

  [Documentation](https://docs.tigerbeetle.com/) has received some very welcome organizational
  and clarity changes. Go check them out!

### TigerTracks 🎧

- [Você Chegou](https://open.spotify.com/track/5Ns9a6JKX4sdUlaAh4SSGy)

## 2024-03-04

### Safety And Performance

- [#1584](https://github.com/tigerbeetle/tigerbeetle/pull/1584)
  Lower our memory usage by removing a redundant stash and not requiring a non-zero object cache
  size for Grooves.

  The object cache is designed to help things like Account lookups, where the positive case can
  skip all the prefetch machinery, but it doesn't make as much sense for other Grooves.

- [#1581](https://github.com/tigerbeetle/tigerbeetle/pull/1581)
  [#1611](https://github.com/tigerbeetle/tigerbeetle/pull/1611)

  Hook [nyrkiö](https://nyrkio.com/) up to our CI! You can find our dashboard
  [here](https://nyrkio.com/public/https%3A%2F%2Fgithub.com%2Ftigerbeetle%2Ftigerbeetle/main/devhub)
  in addition to our [devhub](https://tigerbeetle.github.io/tigerbeetle/).

- [#1635](https://github.com/tigerbeetle/tigerbeetle/pull/1635)
  [#1634](https://github.com/tigerbeetle/tigerbeetle/pull/1634)
  [#1623](https://github.com/tigerbeetle/tigerbeetle/pull/1623)
  [#1619](https://github.com/tigerbeetle/tigerbeetle/pull/1619)
  [#1609](https://github.com/tigerbeetle/tigerbeetle/pull/1609)
  [#1608](https://github.com/tigerbeetle/tigerbeetle/pull/1608)
  [#1595](https://github.com/tigerbeetle/tigerbeetle/pull/1595)

  Lots of small VSR changes, including a VOPR crash fix.

- [#1598](https://github.com/tigerbeetle/tigerbeetle/pull/1598)

  Fix a VOPR failure where state sync would cause a break in the hash chain.

### Internals

- [#1599](https://github.com/tigerbeetle/tigerbeetle/pull/1599)
  [#1597](https://github.com/tigerbeetle/tigerbeetle/pull/1597)

  Use Expand-Archive over unzip in PowerShell - thanks @felipevalerio for reporting!

- [#1607](https://github.com/tigerbeetle/tigerbeetle/pull/1607)
  [#1620](https://github.com/tigerbeetle/tigerbeetle/pull/1620)

  Implement [explicit coverage marks](https://ferrous-systems.com/blog/coverage-marks/).

- [#1621](https://github.com/tigerbeetle/tigerbeetle/pull/1621)
  [#1625](https://github.com/tigerbeetle/tigerbeetle/pull/1625)
  [#1622](https://github.com/tigerbeetle/tigerbeetle/pull/1622)
  [#1600](https://github.com/tigerbeetle/tigerbeetle/pull/1600)
  [#1605](https://github.com/tigerbeetle/tigerbeetle/pull/1605)
  [#1618](https://github.com/tigerbeetle/tigerbeetle/pull/1618)
  [#1606](https://github.com/tigerbeetle/tigerbeetle/pull/1606)

  Minor doc fixups.

- [#1636](https://github.com/tigerbeetle/tigerbeetle/pull/1636)
  [#1626](https://github.com/tigerbeetle/tigerbeetle/pull/1626)

  Default the VOPR to short log, and fix a false assertion in the liveness checker.

- [#1596](https://github.com/tigerbeetle/tigerbeetle/pull/1596)

  Fix a memory leak in our Java tests.

### TigerTracks 🎧

- [Auffe aufn Berg](https://www.youtube.com/watch?v=eRbkRNaqy9Y)

## 2024-02-26

### Safety And Performance

- [#1591](https://github.com/tigerbeetle/tigerbeetle/pull/1591)
  [#1589](https://github.com/tigerbeetle/tigerbeetle/pull/1589)
  [#1579](https://github.com/tigerbeetle/tigerbeetle/pull/1579)
  [#1576](https://github.com/tigerbeetle/tigerbeetle/pull/1576)

  Rework the log repair logic to never repair beyond a "confirmed" checkpoint, fixing a
  [liveness issue](https://github.com/tigerbeetle/tigerbeetle/issues/1378) where it was impossible
  for the primary to repair its entire log, even with a quorum of replicas at a recent checkpoint.

- [#1572](https://github.com/tigerbeetle/tigerbeetle/pull/1572)

  Some Java unit tests created native client instances without the proper deinitialization,
  causing an `OutOfMemoryError` during CI.

- [#1569](https://github.com/tigerbeetle/tigerbeetle/pull/1569)
  [#1570](https://github.com/tigerbeetle/tigerbeetle/pull/1570)

  Fix Vopr's false alarms.

### Internals

- [#1585](https://github.com/tigerbeetle/tigerbeetle/pull/1585)

  Document how assertions should be used, especially those with complexity _O(n)_ under
  the `constants.verify` conditional.

- [#1580](https://github.com/tigerbeetle/tigerbeetle/pull/1580)

  Harmonize and automate the logging pattern by using the `@src` built-in to retrieve the
  function name.

- [#1568](https://github.com/tigerbeetle/tigerbeetle/pull/1568)

  Include the benchmark smoke as part of the `zig build test` command rather than a special case
  during CI.

- [#1574](https://github.com/tigerbeetle/tigerbeetle/pull/1574)

  Remove unused code coverage metrics from the CI.

- [#1575](https://github.com/tigerbeetle/tigerbeetle/pull/1575)
  [#1573](https://github.com/tigerbeetle/tigerbeetle/pull/1573)
  [#1582](https://github.com/tigerbeetle/tigerbeetle/pull/1582)

  Re-enable Windows CI 🎉.

### TigerTracks 🎧

- [Dos Margaritas](https://www.youtube.com/watch?v=Ts_7BYubYws)

  [(_versión en español_)](https://www.youtube.com/watch?v=B_VLegyguoI)

## 2024-02-19

### Safety And Performance

- [#1533](https://github.com/tigerbeetle/tigerbeetle/pull/1533)

  DVCs implicitly nack missing prepares from old log-views.

  (This partially addresses a liveness issue in the view change.)

- [#1552](https://github.com/tigerbeetle/tigerbeetle/pull/1552)

  When a replica joins a view by receiving an SV message, some of the SV's headers may be too far
  ahead to insert into the journal. (That is, they are beyond the replica's checkpoint trigger.)

  During a view change, those headers are now eligible to be DVC headers.

  (This partially addresses a liveness issue in the view change.)

- [#1560](https://github.com/tigerbeetle/tigerbeetle/pull/1560)

  Fixes a bug in the C client that wasn't handling `error.TooManyOutstanding` correctly.

### Internals

- [#1482](https://github.com/tigerbeetle/tigerbeetle/pull/1482)

  Bring back Windows tests for .Net client in CI.

- [#1540](https://github.com/tigerbeetle/tigerbeetle/pull/1540)

  Add script to scaffold changelog updates.

- [#1542](https://github.com/tigerbeetle/tigerbeetle/pull/1542),
  [#1553](https://github.com/tigerbeetle/tigerbeetle/pull/1553),
  [#1559](https://github.com/tigerbeetle/tigerbeetle/pull/1559),
  [#1561](https://github.com/tigerbeetle/tigerbeetle/pull/1561)

  Improve CI/test error reporting.

- [#1551](https://github.com/tigerbeetle/tigerbeetle/pull/1551)

  Draw devhub graph as line graph.

- [#1554](https://github.com/tigerbeetle/tigerbeetle/pull/1554)

  Simplify command to run a single test.

- [#1555](https://github.com/tigerbeetle/tigerbeetle/pull/1555)

  Add client batching integration tests.

- [#1557](https://github.com/tigerbeetle/tigerbeetle/pull/1557)

  Format default values into the CLI help message.

- [#1558](https://github.com/tigerbeetle/tigerbeetle/pull/1558)

  Track commit timestamp to enable retrospective benchmarking in the devhub.

- [#1562](https://github.com/tigerbeetle/tigerbeetle/pull/1562),
  [#1563](https://github.com/tigerbeetle/tigerbeetle/pull/1563)

  Improve CI/test performance.

- [#1567](https://github.com/tigerbeetle/tigerbeetle/pull/1567)

  Guarantee that the test runner correctly reports "zero tests run" when run with a filter that
  matches no tests.

### TigerTracks 🎧

- [Eye Of The Tiger](https://www.youtube.com/watch?v=btPJPFnesV4)

  (Hat tip to [iofthetiger](https://ziggit.dev/t/iofthetiger/3065)!)

## 2024-02-12

### Safety And Performance

- [#1519](https://github.com/tigerbeetle/tigerbeetle/pull/1519)

  Reduce checkpoint latency by checkpointing the grid concurrently with other trailers.

- [#1515](https://github.com/tigerbeetle/tigerbeetle/pull/1515)

  Fix a logical race condition (which was caught by an assert) when reading and writing client
  replies concurrently.


- [#1522](https://github.com/tigerbeetle/tigerbeetle/pull/1522)

  Double check that both checksum and request number match between a request and the corresponding
  reply.

- [#1520](https://github.com/tigerbeetle/tigerbeetle/pull/1520)

  Optimize fields with zero value by not adding them to an index.

### Features

- [#1526](https://github.com/tigerbeetle/tigerbeetle/pull/1526),
  [#1531](https://github.com/tigerbeetle/tigerbeetle/pull/1531).

  Introduce `get_account_history` operation for querying the historical balances of a given account.

- [#1523](https://github.com/tigerbeetle/tigerbeetle/pull/1523)

  Add helper function for generating approximately monotonic IDs to various language clients.

### TigerTracks 🎧

- [Musique à Grande Vitesse](https://open.spotify.com/album/0pmrBIfqDn65p4FX9ubqXn?si=aLliiV5dSOeeId57jtaHhw)

## 2024-02-05

### Safety And Performance

- [#1489](https://github.com/tigerbeetle/tigerbeetle/pull/1489),
  [#1496](https://github.com/tigerbeetle/tigerbeetle/pull/1496),
  [#1501](https://github.com/tigerbeetle/tigerbeetle/pull/1501).

  Harden VSR against edge cases.

- [#1508](https://github.com/tigerbeetle/tigerbeetle/pull/1508),
  [#1509](https://github.com/tigerbeetle/tigerbeetle/pull/1509).

  Allows VSR to perform checkpoint steps concurrently to reduce latency spikes.

- [#1505](https://github.com/tigerbeetle/tigerbeetle/pull/1505)

  Removed unused indexes on account balances for a nice bump in throughput and lower memory usage.

- [#1512](https://github.com/tigerbeetle/tigerbeetle/pull/1512)

  Only zero-out the parts necessary for correctness of fresh storage buffers. "Defense in Depth"
  without sacrificing performance!

### Features

- [#1491](https://github.com/tigerbeetle/tigerbeetle/pull/1491),
  [#1503](https://github.com/tigerbeetle/tigerbeetle/pull/1503).

  TigerBeetle's [dev workbench](https://tigerbeetle.github.io/tigerbeetle/) now also tracks
  memory usage (RSS), throughput, and latency benchmarks over time!

### Internals

- [#1481](https://github.com/tigerbeetle/tigerbeetle/pull/1481),
  [#1493](https://github.com/tigerbeetle/tigerbeetle/pull/1493),
  [#1495](https://github.com/tigerbeetle/tigerbeetle/pull/1495),
  [#1498](https://github.com/tigerbeetle/tigerbeetle/pull/1498).

  Simplify assertions and tests for VSR and Replica.

- [#1497](https://github.com/tigerbeetle/tigerbeetle/pull/1497),
  [#1502](https://github.com/tigerbeetle/tigerbeetle/pull/1502),
  [#1504](https://github.com/tigerbeetle/tigerbeetle/pull/1504).

  .NET CI fixups

- [#1485](https://github.com/tigerbeetle/tigerbeetle/pull/1485),
  [#1499](https://github.com/tigerbeetle/tigerbeetle/pull/1499),
  [#1504](https://github.com/tigerbeetle/tigerbeetle/pull/1504).

  Spring Cleaning

### TigerTracks 🎧

- [Bone Dry](https://open.spotify.com/track/0adZjn5WV3b0BcZbvSi0y9)

## 2024-01-29

### Safety And Performance

- [#1446](https://github.com/tigerbeetle/tigerbeetle/pull/1446)

  Panic on checkpoint divergence. Previously, if a replica's state on disk diverged, we'd
  use state sync to bring it in line. Now, we don't allow any storage engine nondeterminism
  (mixed version clusters are forbidden) and panic if we encounter any.

- [#1476](https://github.com/tigerbeetle/tigerbeetle/pull/1476)

  Fix a liveness issues when starting a view across checkpoints in an idle cluster.

- [#1460](https://github.com/tigerbeetle/tigerbeetle/pull/1460)

  Stop an isolated replica from locking a standby out of a cluster.

### Features

- [#1470](https://github.com/tigerbeetle/tigerbeetle/pull/1470)

  Change `get_account_transfers` to use `timestamp_min` and `timestamp_max` to allow filtering by
  timestamp ranges.

- [#1463](https://github.com/tigerbeetle/tigerbeetle/pull/1463)

  Allow setting `--addresses=0` when starting TigerBeetle to enable a mode helpful for integration
  tests:
  * A free port will be picked automatically.
  * The port, and only the port, will be printed to stdout which will then be closed.
  * TigerBeetle will [exit when its stdin is closed](https://matklad.github.io/2023/10/11/unix-structured-concurrency.html).

- [#1402](https://github.com/tigerbeetle/tigerbeetle/pull/1402)

  TigerBeetle now has a [dev workbench](https://tigerbeetle.github.io/tigerbeetle/)! Currently we
  track our build times and executable size over time.

- [#1461](https://github.com/tigerbeetle/tigerbeetle/pull/1461)

  `tigerbeetle client ...` is now `tigerbeetle repl ...`.

### Internals

- [#1480](https://github.com/tigerbeetle/tigerbeetle/pull/1480)

  Deprecate support and testing for Node 16, which is EOL.

- [#1477](https://github.com/tigerbeetle/tigerbeetle/pull/1477),
  [#1469](https://github.com/tigerbeetle/tigerbeetle/pull/1469),
  [#1475](https://github.com/tigerbeetle/tigerbeetle/pull/1475),
  [#1457](https://github.com/tigerbeetle/tigerbeetle/pull/1457),
  [#1452](https://github.com/tigerbeetle/tigerbeetle/pull/1452).

  Improve VOPR & VSR logging, docs, assertions and tests.

- [#1474](https://github.com/tigerbeetle/tigerbeetle/pull/1474)

  Improve integration tests around Node and `pending_transfer_expired` - thanks to our friends at
  Rafiki for reporting!

### TigerTracks 🎧

- [Paint It, Black](https://www.youtube.com/watch?v=170sceOWWXc)

## 2024-01-22

### Safety And Performance

- [#1438](https://github.com/tigerbeetle/tigerbeetle/pull/1438)

  Avoid an extra copy of data when encoding the superblock during checkpoint.

- [#1429](https://github.com/tigerbeetle/tigerbeetle/pull/1429)

  Use more precise upper bounds for static memory allocation, reducing memory usage by about 200MiB.

- [#1439](https://github.com/tigerbeetle/tigerbeetle/pull/1439)

  When reading data past the end of the file, defensively zero-out the result buffer.

### Features

- [#1443](https://github.com/tigerbeetle/tigerbeetle/pull/1443)

  Upgrade C# client API to use `Span<T>`.

- [#1347](https://github.com/tigerbeetle/tigerbeetle/pull/1347)

  Add ID generation function to the Java client. TigerBeetle doesn't assign any meaning to IDs and
  can use anything as long as it is unique. However, for optimal performance it is best if these
  client-generated IDs are approximately monotonic. This can be achieved by, for example, using
  client's current timestamp for high order bits of an ID. The new helper does just that.

### Internals

- [#1437](https://github.com/tigerbeetle/tigerbeetle/pull/1437),
  [#1435](https://github.com/tigerbeetle/tigerbeetle/pull/1435),
  [d7c3f46](https://github.com/tigerbeetle/tigerbeetle/commit/d7c3f4654ea7c65b6d141be33dadd29e869c3984).

  Rewrite git history to remove large files accidentally added to the repository during early quick
  prototyping phase. To make this durable, add CI checks for unwanted files. The original history
  is available at:

  <https://github.com/tigerbeetle/tigerbeetle-history-archive>

- [#1421](https://github.com/tigerbeetle/tigerbeetle/pull/1421),
  [#1401](https://github.com/tigerbeetle/tigerbeetle/pull/1401).

  New tips for the style guide:

  - [write code top-down](https://www.teamten.com/lawrence/programming/write-code-top-down.html)
  - [pair up assertions](https://tigerbeetle.com/blog/2023-12-27-it-takes-two-to-contract/)

### TigerTracks 🎧

- [Don't Take No For An Answer](https://youtu.be/BUDe0bJAHjY?si=_rdqeGRgRoA9HQnV)

## 2024-01-15

Welcome to 2024!

### Safety And Performance

- [#1425](https://github.com/tigerbeetle/tigerbeetle/pull/1425),
  [#1412](https://github.com/tigerbeetle/tigerbeetle/pull/1412),
  [#1410](https://github.com/tigerbeetle/tigerbeetle/pull/1410),
  [#1408](https://github.com/tigerbeetle/tigerbeetle/pull/1408),
  [#1395](https://github.com/tigerbeetle/tigerbeetle/pull/1395).

  Run more fuzzers directly in CI as a part of not rocket science package.

- [#1413](https://github.com/tigerbeetle/tigerbeetle/pull/1413)

   Formalize some ad-hoc testing practices as proper integration tests (that is, tests that interact
   with a `tigerbeetle` binary through IPC).

- [#1404](https://github.com/tigerbeetle/tigerbeetle/pull/1404)

   Add a lint check for unused Zig files.

- [#1390](https://github.com/tigerbeetle/tigerbeetle/pull/1390)

  Improve cluster availability by including conservative information about the current view into
  ping-pong messages. In particular, prevent the cluster from getting stuck when all replicas become
  primaries for different views.

- [#1365](https://github.com/tigerbeetle/tigerbeetle/pull/1365)

  Test both the latest and the oldest supported Java version on CI.

- [#1389](https://github.com/tigerbeetle/tigerbeetle/pull/1389)

  Fix a data race on close in the Java client.

### Features

- [#1403](https://github.com/tigerbeetle/tigerbeetle/pull/1403)

  Make binaries on Linux about six times smaller (12MiB -> 2MiB). Turns `tigerbeetle` was
  accidentally including 10 megabytes worth of debug info! Note that unfortunately stripping _all_
  debug info also prevents getting a nice stack trace in case of a crash. We are working on finding
  the minimum amount of debug information required to get _just_ the stack traces.

- [#1423](https://github.com/tigerbeetle/tigerbeetle/pull/1423),
  [#1426](https://github.com/tigerbeetle/tigerbeetle/pull/1426).

  Cleanup error handling API for Java client to never surface internal errors as checked exceptions.

- [#1405](https://github.com/tigerbeetle/tigerbeetle/pull/1405)

  Add example for setting up TigerBeetle as a systemd service.

- [#1400](https://github.com/tigerbeetle/tigerbeetle/pull/1400)

  Drop support for .Net Standard 2.1.

- [#1397](https://github.com/tigerbeetle/tigerbeetle/pull/1397)

  Don't exit repl on `help` command.

### Internals

- [#1422](https://github.com/tigerbeetle/tigerbeetle/pull/1422),
  [#1420](https://github.com/tigerbeetle/tigerbeetle/pull/1420),
  [#1417](https://github.com/tigerbeetle/tigerbeetle/pull/1417)

  Overhaul documentation-testing infrastructure to reduce code duplication.

- [#1398](https://github.com/tigerbeetle/tigerbeetle/pull/1398)

  Don't test NodeJS client on platforms for which there are no simple upstream installation scripts.

- [#1388](https://github.com/tigerbeetle/tigerbeetle/pull/1388)

  Use histogram in the benchmark script to reduce memory usage.

### TigerTracks 🎧

- [Stripped](https://open.spotify.com/track/20BDMQu40KIUxUeFusq6eq)

## 2023-12-20

_“The exception confirms the rule in cases not excepted."_ ― Cicero.

Due to significant commits we had this last week, we decided to make an exception
in our release schedule and cut one more release in 2023!

Still, **the TigerBeetle team wishes everyone happy holidays!** 🎁

### Internals

- [#1362](https://github.com/tigerbeetle/tigerbeetle/pull/1362),
  [#1367](https://github.com/tigerbeetle/tigerbeetle/pull/1367),
  [#1374](https://github.com/tigerbeetle/tigerbeetle/pull/1374),
  [#1375](https://github.com/tigerbeetle/tigerbeetle/pull/1375)

  Some CI-related stuff plus the `-Drelease` flag, which will bring back the joy of
  using the compiler from the command line 🤓.

- [#1373](https://github.com/tigerbeetle/tigerbeetle/pull/1373)

  Added value count to `TableInfo`, allowing future optimizations for paced compaction.

### Safety And Performance

- [#1346](https://github.com/tigerbeetle/tigerbeetle/pull/1346)

  The simulator found a failure when the WAL gets corrupted near a checkpoint boundary, leading us
  to also consider scenarios where corrupted blocks in the grid end up "intersecting" with
  corruption in the WAL, making the state unrecoverable where it should be. We fixed it by
  extending the durability of "prepares", evicting them from the WAL only when there's a quorum of
  checkpoints covering this "prepare".

- [#1366](https://github.com/tigerbeetle/tigerbeetle/pull/1366)

  Fix a unit test that regressed after we changed an undesirable behavior that allowed `prefetch`
  to invoke its callback synchronously.

- [#1381](https://github.com/tigerbeetle/tigerbeetle/pull/1381)

  Relaxed a simulator's verification, allowing replicas of the core cluster to be missing some
  prepares, as long as they are from a past checkpoint.

### Features

- [#1054](https://github.com/tigerbeetle/tigerbeetle/pull/1054)

  A highly anticipated feature lands on TigerBeetle: it's now possible to retrieve the transfers
  involved with a given account by using the new operation `get_account_transfers`.

  Note that this feature itself is an ad-hoc API intended to be replaced once we have a proper
  Querying API. The real improvement of this PR is the implementation of range queries, enabling
  us to land exciting new features on the next releases.

- [#1368](https://github.com/tigerbeetle/tigerbeetle/pull/1368)

  Bump the client's maximum limit and the default value of `concurrency_max` to fully take
  advantage of the batching logic.

### TigerTracks 🎧

- [Everybody needs somebody](https://www.youtube.com/watch?v=m1M5Tc7eLCo)

## 2023-12-18

*As the last release of the year 2023, the TigerBeetle team wishes everyone happy holidays!* 🎁

### Internals

- [#1359](https://github.com/tigerbeetle/tigerbeetle/pull/1359)

  We've established a rotation between the team for handling releases. As the one writing these
  release notes, I am now quite aware.

- [#1357](https://github.com/tigerbeetle/tigerbeetle/pull/1357)

  Fix panic in JVM unit test on Java 21. We test JNI functions even if they're not used by the Java
  client and the semantics have changed a bit since Java 11.

- [#1351](https://github.com/tigerbeetle/tigerbeetle/pull/1351),
  [#1356](https://github.com/tigerbeetle/tigerbeetle/pull/1356),
  [#1360](https://github.com/tigerbeetle/tigerbeetle/pull/1360)

  Move client sessions from the Superblock (database metadata) into the Grid (general storage). This
  simplifies control flow for various sub-components like Superblock checkpointing and Replica state
  sync.

### Safety And Performance

- [#1352](https://github.com/tigerbeetle/tigerbeetle/pull/1352)

  An optimization for removes on secondary indexes makes a return. Now tombstone values in the LSM
  can avoid being compacted all the way down to the lowest level if they can be cancelled out by
  inserts.

- [#1257](https://github.com/tigerbeetle/tigerbeetle/pull/1257)

  Clients automatically batch pending similar requests 🎉! If a tigerbeetle client submits a
  request, and one with the same operation is currently in-flight, they will be grouped and
  processed together where possible (currently, only for `CreateAccount` and `CreateTransfers`).
  This should [greatly improve the performance](https://github.com/tigerbeetle/tigerbeetle/pull/1257#issuecomment-1812648270)
  of workloads which submit a single operation at a time.

### TigerTracks 🎧

- [Carouselambra](https://open.spotify.com/track/0YZKbKo9i91i7LD0m1KASq)

## 2023-12-11

### Safety And Performance

- [#1339](https://github.com/tigerbeetle/tigerbeetle/pull/1339)

  Defense in depth: add checkpoint ID to prepare messages. Checkpoint ID is a hash that covers, via
  hash chaining, the entire state stored in the data file. Verifying that checkpoint IDs match
  provides a direct strong cryptographic guarantee that the state is the same across replicas, on
  top of existing guarantee that the sequence of events leading to the state is identical.

### Internals

- [#1343](https://github.com/tigerbeetle/tigerbeetle/pull/1343),
  [#1341](https://github.com/tigerbeetle/tigerbeetle/pull/1341),
  [#1340](https://github.com/tigerbeetle/tigerbeetle/pull/1340)

  Gate the main branch on more checks: unit-tests for NodeJS and even more fuzzers.

- [#1332](https://github.com/tigerbeetle/tigerbeetle/pull/1332),
  [#1348](https://github.com/tigerbeetle/tigerbeetle/pull/1348)

  Code cleanups after removal of storage size limit.

### TigerTracks 🎧

- [Concrete Reservation](https://open.spotify.com/track/1Li9HBLXG2LJSeD4fEhtcd?si=64611215922a4436)

## 2023-12-04

### Safety And Performance

- [#1330](https://github.com/tigerbeetle/tigerbeetle/pull/1330),
  [#1319](https://github.com/tigerbeetle/tigerbeetle/pull/1319)

  Fix free set index. The free set is a bitset of free blocks in the grid. To speed up block
  allocation, the free set also maintains an index --- a coarser-grained bitset where a single bit
  corresponds to 1024 blocks. Maintaining consistency between a data structure and its index is
  hard, and thorough assertions are crucial. When moving free set to the grid, we discovered that,
  in fact, we don't have enough assertions in this area and, as a result, even have a bug!
  Assertions added, bug removed!

- [#1323](https://github.com/tigerbeetle/tigerbeetle/pull/1323),
  [#1336](https://github.com/tigerbeetle/tigerbeetle/pull/1336),
  [#1324](https://github.com/tigerbeetle/tigerbeetle/pull/1324)

  LSM tree fuzzer found a couple of bugs in its own code.

### Features

- [#1331](https://github.com/tigerbeetle/tigerbeetle/pull/1331),
  [#1322](https://github.com/tigerbeetle/tigerbeetle/pull/1322),
  [#1328](https://github.com/tigerbeetle/tigerbeetle/pull/1328)

  Remove format-time limit on the size of the data file. Before, the maximum size of the data file
  affected the layout of the superblock, and there wasn't any good way to increase this limit, short
  of recreating the cluster from scratch. Now, this limit only applies to the in-memory data
  structures: when a data files grows large, it is sufficient to just restart its replica with a
  larger amount of RAM.

- [#1321](https://github.com/tigerbeetle/tigerbeetle/pull/1321).

  We finally have the "installation" page in our docs!

### Internals

- [#1334](https://github.com/tigerbeetle/tigerbeetle/pull/1334)

  Use Zig's new `if (@inComptime())` builtin to compute checksum of an empty byte slice at compile
  time.

- [#1315](https://github.com/tigerbeetle/tigerbeetle/pull/1315)

  Fix unit tests for the Go client and add them to
  [not rocket science](https://graydon2.dreamwidth.org/1597.html)
  set of checks.

### TigerTracks 🎧

- [Times Like These](https://www.youtube.com/watch?v=cvCUXXsP5WE)

## 2023-11-27

### Internals

- [#1306](https://github.com/tigerbeetle/tigerbeetle/pull/1306),
  [#1308](https://github.com/tigerbeetle/tigerbeetle/pull/1308)

  When validating our releases, use the `release` branch instead of `main` to ensure everything is
  in sync, and give the Java validation some retry logic to allow for delays in publishing to
  Central.

- [#1310](https://github.com/tigerbeetle/tigerbeetle/pull/1310)

  Pad storage checksums from 128-bit to 256-bit. These are currently unused, but we're reserving
  the space for AEAD tags in future.

- [#1312](https://github.com/tigerbeetle/tigerbeetle/pull/1312)

  Remove a trailing comma in our Java client sample code.

- [#1313](https://github.com/tigerbeetle/tigerbeetle/pull/1313)

  Switch `bootstrap.sh` to use spaces only for indentation and ensure it's checked by our
  shellcheck lint.

- [#1314](https://github.com/tigerbeetle/tigerbeetle/pull/1314)

  Update our `DESIGN.md` to better reflect storage fault probabilities and add in a reference.

- [#1316](https://github.com/tigerbeetle/tigerbeetle/pull/1316)

  Add `CHANGELOG.md` validation to our tidy lint script. We now check line length limits and
  trailing whitespace.

- [#1317](https://github.com/tigerbeetle/tigerbeetle/pull/1317)

  In keeping with TigerStyle rename `reserved_nonce` to `nonce_reserved`.

- [#1318](https://github.com/tigerbeetle/tigerbeetle/pull/1318)

  Note in TigerStyle that callbacks go last in the list of parameters.

- [#1325](https://github.com/tigerbeetle/tigerbeetle/pull/1325)

  Add an exception for line length limits if there's a link in said line.

### TigerTracks 🎧

- [Space Trash](https://www.youtube.com/watch?v=tmcVAJd87Wk)

## 2023-11-20

### Safety And Performance

- [#1300](https://github.com/tigerbeetle/tigerbeetle/pull/1300)

  Recursively check for padding in structs used for data serialization, ensuring that no
  uninitialized bytes can be stored or transmitted over the network. Previously, we checked only
  if the struct had no padding, but not its fields.

### Internals

- [#1299](https://github.com/tigerbeetle/tigerbeetle/pull/1299)

  Minor adjustments in the release process, making it easier to track updates in the documentation
  website when a new version is released, even if there are no changes in the documentation itself.

- [#1301](https://github.com/tigerbeetle/tigerbeetle/pull/1301)

  Fix outdated documentation regarding 128-bit balances.

- [#1302](https://github.com/tigerbeetle/tigerbeetle/pull/1302)

  Fix a [bug](https://github.com/tigerbeetle/tigerbeetle/issues/1290) discovered and reported
  during the [Hackathon 2023](https://github.com/tigerbeetle/hackathon-2023), where the Node.js
  client's error messages were truncated due to an incorrect string concatenation adding a null
  byte `0x00` in the middle of the string.

- [#1291](https://github.com/tigerbeetle/tigerbeetle/pull/1291)

  Update the Node.js samples instructions, guiding the user to install all dependencies before
  the sample project.

- [#1295](https://github.com/tigerbeetle/tigerbeetle/pull/1295)

  We've doubled the `Header`s size to 256 bytes, paving the way for future improvements that will
  require extra space. Concurrently, this change also refactors a great deal of code.
  Some of the `Header`'s fields are shared by all messages, however, each `Command` also requires
  specific pieces of information that are only used by its kind of message, and it was necessary to
  repurpose and reinterpret fields so that the same header could hold different data depending on
  the context. Now, commands have their own specialized data type containing the fields that are
  only pertinent to the context, making the API much safer and intent-clear.

- [#1304](https://github.com/tigerbeetle/tigerbeetle/pull/1304)

  With larger headers (see #1295) we have enough room to make the cluster ID a 128-bit integer,
  allowing operators to generate random cluster IDs without the cost of having a centralized ID
  coordinator. Also updates the documentation and sample programs to reflect the new maximum batch
  size, which was reduced from 8191 to 8190 items after we doubled the header.

### TigerTracks 🎧

- [She smiled sweetly](https://www.youtube.com/watch?v=fB1EpEFz6Lg)

## 2023-11-13

### Safety And Performance

- [#1264](https://github.com/tigerbeetle/tigerbeetle/pull/1264)

  Implement last-mile release artifact verification in CI.

- [#1268](https://github.com/tigerbeetle/tigerbeetle/pull/1268)

  Bump the simulator's safety phase max-ticks to avoid false positives from the liveness check.

- [#1270](https://github.com/tigerbeetle/tigerbeetle/pull/1270)

  Fix a crash caused by a race between a commit and a repair acquiring a client-reply `Write`.

- [#1278](https://github.com/tigerbeetle/tigerbeetle/pull/1278)

  Fix a crash caused by a race between state (table) sync and a move-table compaction.

  Both bugs didn't stand a chance in the [Line of Fire](https://www.youtube.com/watch?v=pq-G3EWO9XM)
  of our deterministic simulator!

### Internals

- [#1244](https://github.com/tigerbeetle/tigerbeetle/pull/1244)

  Specify which CPU features are supported in builds.

- [#1275](https://github.com/tigerbeetle/tigerbeetle/pull/1275)

  Improve `shell.zig`'s directory handling, to guard against mistakes with respect to the current
  working directory.

- [#1277](https://github.com/tigerbeetle/tigerbeetle/pull/1277)

  Interpret a git hash as a VOPR seed, to enable reproducible simulator smoke tests in CI.

- [#1288](https://github.com/tigerbeetle/tigerbeetle/pull/1288)

  Explicitly target glibc 2.7 when building client libraries, to make sure TigerBeetle clients are
  compatible with older distributions.

## 2023-11-06

### Safety And Performance

- [#1263](https://github.com/tigerbeetle/tigerbeetle/pull/1263)

  Revive the TigerBeetle [VOPRHub](https://github.com/tigerbeetle-vopr)! Some previous changes left
  it on it's [Last Stand](https://open.spotify.com/track/1ibHApXtb0pgplmNDRLHrJ), but the bot is
  back in business finding liveness bugs:
  [#1266](https://github.com/tigerbeetle/tigerbeetle/issues/1266)

### Features

- [#1260](https://github.com/tigerbeetle/tigerbeetle/pull/1260)

  Set the latest Docker image to track the latest release. Avoids language clients going out of sync
  with your default docker replica installations.

### Internals

- [#1261](https://github.com/tigerbeetle/tigerbeetle/pull/1261)

  Move website doc generation for https://docs.tigerbeetle.com/ into the main repo.

- [#1265](https://github.com/tigerbeetle/tigerbeetle/pull/1265),
  [#1243](https://github.com/tigerbeetle/tigerbeetle/pull/1243)

  Addressed some release quirks with the .NET and Go client builds.

## 2023-10-30

### Safety And Performance

- [#1251](https://github.com/tigerbeetle/tigerbeetle/pull/1251)

  Prove a tighter upper bound for the size of manifest log. With this new bound, manifest log is
  guaranteed to fit in allocated memory and is smaller. Additionally, manifest log compaction is
  paced depending on the current length of the log, balancing throughput and time-to-recovery.

- [#1198](https://github.com/tigerbeetle/tigerbeetle/pull/1198)

  Recommend using [ULID](https://github.com/ulid/spec) for event IDs. ULIDs are approximately
  sorted, which significantly improves common-case performance.

### Internals

- [#1218](https://github.com/tigerbeetle/tigerbeetle/pull/1218)

  Rewrite Node.js client implementation to use the common C client underneath. While clients for
  other languages already use the underlying C library, the Node.js client duplicated some code for
  historical reasons, but now we can leave that duplication in the past. [This Is A
  Photograph](https://www.youtube.com/watch?v=X0i7whWLW8M).

## 2023-10-25

### Safety And Performance

- [#1240](https://github.com/tigerbeetle/tigerbeetle/pull/1240)

  Increase block size to reduce latencies due to compaction work. Today, we use a simplistic
  schedule for compaction, which causes latency spikes at the end of the bar. While the future
  solution will implement a smarter compaction pacing to distribute the work more evenly, we can
  get a quick win by tweaking the block and the bar size, which naturally evens out latency spikes.

- [#1246](https://github.com/tigerbeetle/tigerbeetle/pull/1246)

  The new release process changed the names of the published artifacts (the version is no longer
  included in the name). This broke our quick start scripts, which we have fixed. Note that we are
  in the process of rolling out the new release process, so some unexpected breakage is expected.

- [#1239](https://github.com/tigerbeetle/tigerbeetle/pull/1239),
  [#1243](https://github.com/tigerbeetle/tigerbeetle/pull/1243)

  Speed up secondary index maintenance by statically distinguishing between insertions and
  updates. [Faster than the speed of night!](https://open.spotify.com/track/30oZqbcUROFLSru3WcN3bx)

### Features

- [#1245](https://github.com/tigerbeetle/tigerbeetle/pull/1245)

  Include Docker images in the release.

### Internals

- [#1234](https://github.com/tigerbeetle/tigerbeetle/pull/1234)

  Simplify superblock layout by using a linked list of blocks for manifest log, so that the
  superblock needs to store only two block references.

  P.S. Note the PR number!

## 2023-10-23

This is the start of the changelog. A lot happened before this point and is lost in the mist of git
history, but any notable change from this point on shall be captured by this document.

### Safety And Performance

- [#1225](https://github.com/tigerbeetle/tigerbeetle/pull/1225)

  Remove bloom filters. TigerBeetle implements more targeted optimizations for
  both positive and negative lookups, making bloom filters a net loss.

### Features

- [#1228](https://github.com/tigerbeetle/tigerbeetle/pull/1228)

  Increase alignment of data blocks to 128KiB (from 512 bytes). Larger alignment gives operators
  better control over physical layout of data on disk.

### Internals

- [#1201](https://github.com/tigerbeetle/tigerbeetle/pull/1201),
  [#1232](https://github.com/tigerbeetle/tigerbeetle/pull/1232)

  Overhaul of CI and release infrastructure. CI and releases are now driven by Zig code. The main
  branch is gated on integration tests for all clients.

  This is done in preparation for the first TigerBeetle release.

## Prehistory

For archeological inquiries, check out the state of the repository at the time of the first
changelog:

[https://github.com/tigerbeetle/tigerbeetle/](
https://github.com/tigerbeetle/tigerbeetle/tree/d2d6484188ecc57680e8bde446b5d09b6f2d83ca)
