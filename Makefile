.PHONY: all, deploy

SERVICE_NAME=play-smart-proxy

edit:
	swagger project edit

start:
	swagger project start

dev:
	swagger project start

deploy-init:
	git remote add azure https://chaliy@$(SERVICE_NAME).scm.azurewebsites.net:443/$(SERVICE_NAME).git

deploy:
	git push azure master
