# Accelerator Theme

This project contains the core 'Theme' used by the GLA Drupal accelerator and all Drupal sites within the GLA estate

# installation

This project is downloaded using Composer.

```
composer require gla/gla_core_theme
```

```
   {
       "require": {
           "gla/gla_core_theme": "^1.0"
       }
   }
```

Note: This project is currently accessible through a private Packagist,

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
