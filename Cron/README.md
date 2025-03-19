# Cron

Cron is a time-based job scheduler in Unix-like systems. It allows users to schedule scripts or commands to run automatically at specified times.

## Editing the Crontab

To create or edit cron jobs, use:

```bash
crontab -e  # Opens the user's crontab file in the default editor
```

## Cron job syntax

A cron job consists of five time fields followed by the command to execute:

```bash
* * * * * command-to-run
| | | | |
| | | | +---- Day of the week (0 - 6, Sunday = 0)
| | | +------ Month (1 - 12)
| | +-------- Day of the month (1 - 31)
| +---------- Hour (0 - 23)
+------------ Minute (0 - 59)
```

## Example cron jobs

- Run a command at the 5th minute of every hour:
  ```bash
  5 * * * * echo "Cron job running"
  ```
- Run a script every day at midnight:
  ```bash
  0 0 * * * /home/user/myscript.sh
  ```
- Run a task every Monday at 8 AM:
  ```bash
  0 8 * * 1 echo "Weekly task"
  ```

💡 **Tip**: Redirect output to a log file for debugging: `5 * * * * myscript.sh >> /home/user/logs.txt 2>&1`

## Managing cron jobs

- List existing cron jobs:
  ```bash
  crontab -l
  ```
- Remove all cron jobs:
  ```bash
  crontab -r
  ```
