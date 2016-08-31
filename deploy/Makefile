.PHONY: all

RESOURCE_GROUP=play-smart-proxy

install:
	npm install yamlxjson -g

template:
	yaml2json azuredeploy.yaml > azuredeploy.json

apply: template
	azure group deployment create -q -f azuredeploy.json -e azuredeploy.parameters.json $(RESOURCE_GROUP) default
