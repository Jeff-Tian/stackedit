#!/bin/bash
set -e

# Tag and push docker image
docker login -u jefftian -p "$DOCKER_PASSWORD"
docker tag jefftian/stackedit "jefftian/stackedit:$TRAVIS_TAG"
docker push jefftian/stackedit:$TRAVIS_TAG
docker tag jefftian/stackedit:$TRAVIS_TAG jefftian/stackedit:latest
docker push jefftian/stackedit:latest

# Build the chart
cd "$TRAVIS_BUILD_DIR"
npm run chart

# Add chart to helm repository
git clone --branch master "https://jefftian:$GITHUB_TOKEN@github.com/jefftian/stackedit-charts.git" /tmp/charts
cd /tmp/charts
helm package "$TRAVIS_BUILD_DIR/dist/stackedit"
helm repo index --url https://jefftian.github.io/stackedit-charts/ .
git config user.name "Jeff Tian"
git config user.email "jeff.tian@outlook.com"
git add .
git commit --allow-empty --author "Jeff Tian <Jeff.Tian@outlook.com>" -m "Added $TRAVIS_TAG"
git push origin master
