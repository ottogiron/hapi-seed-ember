IMAGE_TAG = ottogiron/hapiember
EMBER_PATH = client
EMBER_CLI_VERSION = 1.13.8
EMBER_IMAGE_TAG = danlynn/ember-cli:$(EMBER_CLI_VERSION)

all: docker-build

docker-build: ember-build
	@docker build --no-cache -f docker/Dockerfile -t $(IMAGE_TAG) .

test: npm-install-dev
	@docker run -it --rm  -v `pwd`:/usr/src/myapp -w /usr/src/myapp node:$(NODE_VERSION) npm test

npm-install-dev:
	@docker run -it --rm  -v `pwd`:/usr/src/myapp -w /usr/src/myapp node:$(NODE_VERSION) npm install --development

ember-build: ember-clean ember-dependencies-install

ember-dependencies-install:
	@cd $(EMBER_PATH) && \
	docker run  --entrypoint "/usr/local/bin/bower" --rm -v `pwd`:/myapp $(EMBER_IMAGE_TAG) install --allow-root> &&  \
	docker run  --entrypoint "/usr/local/bin/npm" --rm -v `pwd`:/myapp $(EMBER_IMAGE_TAG) install>&1

ember-clean:
	@rm -rf $(EMBER_PATH)/dist

.PHONY: ember-clean
