[![Release](https://github.com/ierfaaan/parnian_front/actions/workflows/deploy.yml/badge.svg)](https://github.com/ierfaaan/parnian_front/actions/workflows/deploy.yml)

# How to Deploy?

1. Update the `develop` branch.
2. Create a pull request to the `main` branch => [Here](https://github.com/ierfaaan/parnian_front/compare/main...develop)
3. Let the build run to make sure everything is okay
4. If succeeded, merge it
5. Check the status of the deployment [Here](https://github.com/ierfaaan/parnian_front/actions)

# Why it take so much time to build and deploy?

When you make a pull request, github runs an ubuntu where in it, it pulls the project and run the Dockerfile. in the dockerfile we run `npm ci` and `npm build` command.

That is why :)
fix fix fix
