#!/bin/bash
# Script to quickly create sub-theme.

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
sed -i -e "s/GLA accelerator theme/$NEW_THEME_HUMAN_NAME/" $NEW_THEME_MACHINE_NAME.info.yml
sed -i -e "s|gla/accelerator-theme|gla/$NEW_THEME_MACHINE_NAME|" composer.json

# Remove the backups that sed made. This is easier than finding a cross-platform version of the
# sed command that doesn't produce backups.
rm $NEW_THEME_MACHINE_NAME.info.yml-e
rm composer.json-e

echo "# Check the themes/custom folder for your new sub-theme and replace remaining instances of gla_core_theme with the machine name of your new theme."
