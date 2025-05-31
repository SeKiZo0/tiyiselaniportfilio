#!/bin/bash
echo "Pushing to GitLab (triggers deployment)..."
git push origin main
echo "Syncing to GitHub..."
git push github main
echo "Deployment triggered! Check GitLab CI/CD pipeline."