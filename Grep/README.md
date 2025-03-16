# Grep

The `grep` command searches for patterns within file contents and prints each matching line.

💡 **Tip**: Use `grep -v` to exclude matches, and `grep -l` to list filenames containing matches.

## Basic usage

Below is a list of essential `grep` commands. Refer to the manual (`man <command>` or `<command> --help`) for more details.

- Search for a specific word in a file:
  ```bash
  grep "hello" test.txt  # Finds all lines containing "hello" in test.txt
  ```
- Perform a case-insensitive recursive search:
  ```bash
  grep -ri "hello" # Searches for "hello" in all files within the current directory and subdirectories
  ```
- Use a regular expression to match patterns:
  ```bash
  grep -E "[0-9]{3}" test.txt # Finds lines containing any three-digit sequence
  ```
- Search within command outputs:
  ```bash
  man grep | grep -i "count"  # Finds occurrences of "count" in the grep manual (case-insensitive)
  ```
  ```bash
  ps aux | grep "sound"  # Filters running processes to find those related to "sound"
  ```
