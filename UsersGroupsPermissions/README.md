# Users, Groups & Permissions

This guide covers the basics of users, groups, and file permissions in Linux, including how to manage them and interpret the output of `ls -l`.

💡 **Tip**: Use `ls -ld directory/` to check permissions for a directory itself instead of its contents.

## Understanding Users & Groups

- **Users**: Each person or service using the system has a user account.
- **Groups**: A collection of users that share permissions.
- **Root User**: The system administrator with full access.
- **User Management Commands**:
  ```bash
  whoami  # Displays the current user
  id      # Shows user ID (UID) and group ID (GID)
  groups  # Lists groups the current user belongs to
  ```

## File permissions (`ls -l` output)

Running `ls -l` displays file permissions:

```bash
-rwxr-xr-- 1 user group 1234 Mar 10 12:00 example.sh
```

Explanation of the output:

- `-` (first character): File type (`-` for a file, `d` for a directory, `l` for a symbolic link).
- `rwxr-xr--` (next 9 characters): File permissions.
  - **Owner (`rwx`)** → Read (r), Write (w), Execute (x) for the file owner.
  - **Group (`r-x`)** → Read and Execute permissions for users in the file's group.
  - **Others (`r--`)** → Only Read access for all other users.
- `1` → Number of hard links to the file.
- `user` → File owner.
- `group` → Group owner.
- `1234` → File size in bytes.
- `Mar 10 12:00` → Last modification date.
- `example.sh` → Filename.

## Changing file permissions

### Change Mode (`chmod`)

- Using `chmod`:

  ```bash
  chmod 755 script.sh  # Sets read/write/execute for owner, read/execute for group & others
  chmod u+w file.txt   # Adds write permission for the user (owner)
  chmod g-r file.txt   # Removes read permission for the group
  ```

First character:

- **u** - user
- **g** - group
- **o** - others
- **a** - all of the above

Second character:

- **-** (minus sign) - removes the permission
- **+** (plus sign) - grants the permission
- **=** (equals sign) - set a permission and removes others

Third character:

- **r** - the read permission
- **w** - the write permission
- **x** - the execute permission

💡 **Tip**: `755` and `u+w` are similar, but the difference is that `755` is in octal format.

### Change Owner (`chown`)

- Using `chown`:
  ```bash
  chown user:newgroup file.txt # Changes owner to 'user' and group to 'newgroup'
  ```

### Change Group Ownership (`chgrp`)

- Using `chgrp` (Change Group Ownership):
  ```bash
  chgrp newgroup file.txt # Changes group ownership to 'newgroup'
  ```
