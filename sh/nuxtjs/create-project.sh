# install node
sh ../nodejs/install.sh
# install git
sh ../git/install.sh

# get the project path
project_path=$1
# store the sh/nuxtjs path
sh_nuxtjs_path=`pwd`

# create project
mkdir $project_path
touch $project_path/package.json
cat package.json > $project_path/package.json
cd $project_path
npm install nuxt
mkdir pages components assets static
touch pages/index.vue
cat $sh_nuxtjs_path/index.vue > pages/index.vue
touch .gitignore
cat $sh_nuxtjs_path/gitignore > .gitignore

# configure project
