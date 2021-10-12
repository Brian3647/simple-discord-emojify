#!/bin/bash

yarn fmt && \
yarn lint && \
yarn build && \
cd dist && \
yarn publish
