#!/bin/bash

# This is a basic approach based on https://git.drupalcode.org/project/bootstrap_sass/-/blob/8.x-1.x/scripts/create_subtheme.sh
# In the future, we could borrow the approch that Drupal 10 will take and use a Symfony command to make the copy
# of the theme: https://git.drupalcode.org/project/drupal/-/blob/9.3.x/core/lib/Drupal/Core/Command/GenerateTheme.php

# Don't forget to set the right permissions. From the theme directory run:
# chmod 777 scripts/create-subtheme.sh

echo 'Please enter a machine name, e.g. gla_talk_london_theme'
read NEW_THEME_MACHINE_NAME
if [ -z "${NEW_THEME_MACHINE_NAME}" ]; then
  echo 'Error: Please enter a machine name, e.g. gla_talk_london_theme'
  exit
fi

echo 'Please enter a human readable name, e.g. Talk London'
read NEW_THEME_HUMAN_NAME
if [ -z "${NEW_THEME_HUMAN_NAME}" ]; then
  echo 'Error: Please enter a human readable name, e.g. Talk London'
  exit
fi

cd ../
pwd
cp -r gla_core_theme $NEW_THEME_MACHINE_NAME
cd $NEW_THEME_MACHINE_NAME || return
for file in *gla_core_theme.*; do mv $file ${file//gla_core_theme/$NEW_THEME_MACHINE_NAME}; done
for file in config/*/*gla_core_theme.*; do mv $file ${file//gla_core_theme/$NEW_THEME_MACHINE_NAME}; done

rm scripts/create-subtheme.sh

grep -Rl gla_core_theme .|xargs sed -i -e "s/gla_core_theme/$NEW_THEME_MACHINE_NAME/"
sed -i -e "s/GLA core theme/$NEW_THEME_HUMAN_NAME/" $NEW_THEME_MACHINE_NAME.info.yml
sed -i -e "s/gla_core_theme/$NEW_THEME_MACHINE_NAME/" $NEW_THEME_MACHINE_NAME.info.yml
sed -i -e "s/gla_core_theme/$NEW_THEME_MACHINE_NAME/" $NEW_THEME_MACHINE_NAME.libraries.yml
sed -i -e "s/gla_core_theme/$NEW_THEME_MACHINE_NAME/" $NEW_THEME_MACHINE_NAME.breakpoints.yml
sed -i -e "s|gla/gla_core_theme|gla/$NEW_THEME_MACHINE_NAME|" composer.json

# Remove the backups that sed made. This is easier than finding a cross-platform version of the
# sed command that doesn't produce backups.
rm $NEW_THEME_MACHINE_NAME.info.yml-e
rm composer.json-e

echo "# Check the themes/custom folder for your new sub-theme and replace remaining instances of gla_core_theme with the machine name of your new theme."
