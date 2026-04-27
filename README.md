# Blog Application DevOps

## Description
Application de blog avec une chaîne DevOps complète.

## Architecture
- *Frontend*: HTML/Nginx
- *Backend*: Node.js/Express
- *CI/CD*: GitHub Actions
- *Containerisation*: Docker
- *Orchestration*: Kubernetes + ArgoCD
- *Monitoring*: Prometheus + Grafana

## Lancer localement
\`\`\`bash
cd docker
docker-compose up
\`\`\`

## Structure
\`\`\`
├── frontend/     # Interface HTML
├── backend/      # API Node.js
├── docker/       # Docker compose
├── k8s/          # Kubernetes manifests
└── .github/      # CI/CD pipelines
\`\`\`
