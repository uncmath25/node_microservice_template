phony: clean build test watch

IMAGE_NAME := uncmath25/node-microservice-template
CONTAINER_NAME := node_microservice_template
REMOTE_DIR := /usr/src/app
SERVER_PORT := 3000

default: watch

clean:
	@echo "*** Cleaning repo... ***"
	rm -rf node_modules

build: clean
	@echo "*** Building the Node microservice template Docker image ***"
	docker build -t $(IMAGE_NAME) .

test: build
	@echo "*** Running mocha testing in the Docker container... ***"
	docker run \
		--rm \
		--name $(CONTAINER_NAME) \
		$(IMAGE_NAME) \
		npm run test

watch: test
	@echo "*** Running the Node Docker container in watch mode... ***"
	@echo "*** View the server at http://localhost:${SERVER_PORT} ***"
	docker run \
		--rm \
		--name $(CONTAINER_NAME) \
		--env-file .env.local \
		-p $(SERVER_PORT):$(SERVER_PORT) \
		-v $$(pwd)/src:$(REMOTE_DIR)/src \
		$(IMAGE_NAME) \
		npm run watch
