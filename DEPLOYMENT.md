# Deployment Workflow

## Branch Strategy

### 🌟 Production Branch: `main`
- **Purpose:** Stable, production-ready code
- **Deployment:** Automatic to production URL
- **Access:** Live website users
- **Protection:** Direct pushes should be limited

### 🔧 Development Branch: `development` 
- **Purpose:** Active development and testing
- **Deployment:** Automatic to preview URL
- **Access:** Team review and testing
- **Usage:** Day-to-day development work

## Workflow Process

### 1. Daily Development
```bash
# Switch to development branch
git checkout development

# Pull latest changes
git pull origin development

# Make your changes...
# Commit and push
git add .
git commit -m "feat: your feature description"
git push origin development
```
**Result:** Automatic preview deployment to `https://meme-notfine-git-development-maxpalmira.vercel.app`

### 2. Production Release
```bash
# Create PR from development to main
# Via GitHub UI or:
gh pr create --base main --head development --title "Release: version X.X.X"

# After review and approval, merge to main
# This triggers production deployment
```
**Result:** Automatic production deployment to your custom domain

## Vercel Configuration

### Production Deployment
- **Branch:** `main`
- **URL:** Your custom domain (e.g., `notfine.com`)
- **Environment:** Production

### Preview Deployments  
- **Branch:** `development` (and any other branches)
- **URL:** `https://meme-notfine-git-[branch-name]-maxpalmira.vercel.app`
- **Environment:** Preview

## Benefits

✅ **Safe testing** - Test features before production  
✅ **Review process** - Code review via Pull Requests  
✅ **Rollback capability** - Easy to revert production issues  
✅ **Multiple environments** - Preview and production separation  
✅ **Team collaboration** - Multiple developers can work safely  

## Branch Protection (Recommended)

Set up GitHub branch protection rules for `main`:
- Require pull request reviews
- Require status checks to pass
- Restrict pushes to main branch 