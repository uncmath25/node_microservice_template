#!/bin/bash

set -e

HOST="localhost"
PORT="3000"
VERSION="v1"

curl -X GET \
  http://${HOST}:${PORT}/api/${VERSION}/getResource/1
