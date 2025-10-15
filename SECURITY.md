# Security Policy

## Supported Versions

FoxCloud is a rapidly evolving project. We generally only support the latest version with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within FoxCloud, please send an email to [INSERT EMAIL ADDRESS] instead of using the public issue tracker.

Please include the following information in your report:

- Description of the vulnerability
- Steps to reproduce the vulnerability
- Potential impact of the vulnerability
- Any possible mitigations you've identified

## Security Considerations

FoxCloud is designed with security in mind, but there are some important considerations:

### Environment Variables

- Never commit sensitive environment variables to version control
- Use `wrangler secret put` for production deployments
- Rotate UUIDs regularly for enhanced security

### Proxy Configuration

- Only use trusted proxy servers
- Ensure proxy servers support WebSocket connections
- Verify SSL certificates on proxy servers

### Client Security

- Generate secure, random UUIDs for each user
- Use strong, unique UUIDs (version 4 recommended)
- Limit the number of active UUIDs

## Best Practices

1. Always use the latest version of FoxCloud
2. Regularly rotate UUIDs
3. Monitor access logs for suspicious activity
4. Use strong authentication mechanisms
5. Keep dependencies up to date

## Security Resources

- [Cloudflare Security Documentation](https://developers.cloudflare.com/security/)
- [VLESS Protocol Security](https://github.com/XTLS/Xray-core)