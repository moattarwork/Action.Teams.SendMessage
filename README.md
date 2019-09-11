# Action - Teams: Send Message

This action can be used to send a message to a specific channel in Microsoft Teams using web hooks.

## Steps

- Add web hook support to your specific channel in Microsoft Teams. You can find the setup process [here](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/connectors/connectors-using#setting-up-a-custom-incoming-webhook)
- Add the current action to your github workflow and setup the webhook-url and message. Here is an example:

```yaml
- name: Publish sucess to Microsoft Teams
  uses: moattarwork/Action.Teams.SendMessage@V1
  with:
    webhook-url: ${{ secrets.TEAMS_WEBHOOK_URL }}
    message: 'Build was successful for Onff project'
```

**NOTE:** You can define your secret in your repo settings > secrets and reference them here.
