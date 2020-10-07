const core = require('@actions/core')
const { execSync } = require('child_process')

try {
    // Kill the started SSH agent
    core.info('Stopping SSH agent')
    execSync('kill ${SSH_AGENT_PID}', { stdio: 'inherit' })
} catch (error) {
    core.info(error.message);
    core.info('Error stopping the SSH agent, proceeding anyway');
}
