Login and register user Automatitation

## Requeriments config
* Install appium
* Install Android Studio desktop

Install appium
```shell
npm install -g appium
```
Run commands

```shell
npm init -y
```

```shell
npm init wdio
```

* Select the webdriverIO proyect options and in Framework type select Cucumber
* Install libreries wdio.config.js


* Command run Login
```shell
npx wdio run wdio.conf.js --cucumberOpts.tagExpression='@Login'
```

* Command run Register
```shell
npx wdio run wdio.conf.js --cucumberOpts.tagExpression='@Register
```

Note:
* CI cannot be performed because Android Studio Desktop is required

