```
brew tap azure/functions
brew install azure-functions-core-tools@4
# if upgrading on a machine that has 2.x or 3.x installed:
brew link --overwrite azure-functions-core-tools@4
```

```
npm install -g azure-functions-core-tools@3 --unsafe-perm true
```

## Init Project
``` func init MyFunctionProj ```

## Create Function
``` func new ```


## Publish 
``` func azure functionapp publish <FunctionAppName> ```