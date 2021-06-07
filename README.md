# Accelerator Theme

This project contains the core 'Theme' used by the GLA drupal accelerator and all drupal sites within the GLA estate

# installation
This project is downloaded using composer
```
composer require gla/accelerator_blockquote_core_component
```

```
   {
       "require": {
           "gla/accelerator_blockquote_core_component": "^1.0"
       }
   } 
```




Note: This project is currently accessible through a private pakagist, 
```
    "repositories": [
        {
            "type": "composer",
            "url": "https://repo.packagist.com/greaterlondonauthori/"
        }
   ]
```

and will need an auth key/token
```
   {
      "http-basic": {
          "repo.packagist.com": {
              "username": "<USERNAME>",
              "password": "<TOKEN>"
          }
      }
   }
```
