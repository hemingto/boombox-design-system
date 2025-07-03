# GitHub Automations Setup Guide

This guide will help you implement the complete automation system for your Boombox Design System.

## 🚀 Quick Start

### 1. Repository Secrets Setup

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

#### Required Secrets:
```
NPM_TOKEN=your_npm_token_here
CHROMATIC_PROJECT_TOKEN=your_chromatic_token_here
```

#### How to get these tokens:

**NPM_TOKEN:**
1. Go to [npmjs.com](https://npmjs.com) → Login → Access Tokens
2. Create "Automation" token
3. Copy and add to GitHub secrets

**CHROMATIC_PROJECT_TOKEN:**
1. Sign up at [chromatic.com](https://chromatic.com)
2. Connect your GitHub repository
3. Copy project token from project settings

### 2. GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. This enables automatic Storybook deployment

### 3. Branch Protection Rules

Set up branch protection for `master`:

1. Go to Settings → Branches → Add rule
2. Branch pattern: `master`
3. Enable:
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Require status checks: "CI", "Visual Regression Tests"
   - ✅ Require pull request reviews (1 reviewer minimum)
   - ✅ Dismiss stale reviews
   - ✅ Require review from CODEOWNERS

### 4. Install Dependencies

```bash
npm install
```

### 5. Update Configuration

Update these files with your specific details:

**package.json:**
- Change repository URL
- Update author information

**.github/auto-assign.yml:**
- Replace `calvinhemington` with your team members' GitHub usernames

**lerna.json:**
- Verify npm registry settings

## 📋 Workflow Overview

### Automated Workflows:

1. **CI Pipeline** (`.github/workflows/ci.yml`)
   - Runs on every push/PR
   - Linting, TypeScript checking, testing
   - Builds all packages

2. **Visual Regression** (`.github/workflows/visual-regression.yml`)
   - Runs on component/token changes
   - Chromatic visual testing
   - Percy screenshot comparison

3. **Storybook Deploy** (`.github/workflows/storybook-deploy.yml`)
   - Deploys to GitHub Pages on master branch
   - Notifies team via Slack

4. **Package Publishing** (`.github/workflows/publish.yml`)
   - Manual trigger or release creation
   - Publishes to NPM
   - Creates GitHub releases

5. **Auto Assignment** (`.github/workflows/auto-assign.yml`)
   - Auto-assigns reviewers
   - Labels PRs based on file changes

## 🛠 Development Workflow

### Creating a New Component:

1. **Create component** in `packages/components/src/`
2. **Add Storybook story** with all variants
3. **Write tests** (unit + accessibility)
4. **Create PR** using the template
5. **Automated checks run:**
   - Linting and type checking
   - Unit tests
   - Visual regression tests
   - Accessibility tests
6. **Review process:**
   - Automatic reviewer assignment
   - Manual code review
   - Approval required
7. **Merge to master:**
   - Storybook auto-deploys
   - Component available immediately

### Publishing a Release:

#### Option 1: Manual Trigger
1. Go to Actions → "Publish Packages"
2. Click "Run workflow"
3. Select release type (patch/minor/major)
4. Packages automatically published

#### Option 2: GitHub Release
1. Create a new release on GitHub
2. Publishing workflow triggers automatically

## 🔧 Customization

### Adding Team Members:

Update `.github/auto-assign.yml`:
```yaml
reviewers:
  - your-username
  - teammate1
  - teammate2
```

### Custom Slack Notifications:

Modify the Slack notification steps in workflows to customize messages.

### Additional Checks:

Add new jobs to `ci.yml` for:
- Bundle size analysis
- Performance testing
- Security scanning

## 🐛 Troubleshooting

### Common Issues:

**"NPM publish failed"**
- Check NPM_TOKEN is valid
- Verify package versions are incremented
- Ensure you have publish rights to @boombox namespace

**"Visual tests failing"**
- Chromatic token expired → regenerate
- Baseline needs updating → approve changes in Chromatic UI

**"GitHub Pages not deploying"**
- Check Pages settings enabled
- Verify build-storybook command works locally

### Testing Locally:

```bash
# Test all workflows locally
npm run lint
npm run type-check
npm run test:ci
npm run build
npm run build-storybook
```

## 📚 Next Steps

1. **Set up monitoring:** Add error tracking (Sentry, Bugsnag)
2. **Performance:** Add bundle analysis and performance budgets
3. **Security:** Add dependency scanning and security checks
4. **Documentation:** Set up automated documentation generation

## 🆘 Need Help?

- Check the [GitHub Actions documentation](https://docs.github.com/en/actions)
- Review workflow logs in the Actions tab
- Create an issue using our bug report template

---

**Remember:** Test these workflows on a feature branch first before enabling on master! 