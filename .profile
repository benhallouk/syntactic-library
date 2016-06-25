# add vendor binaries to the path
export PATH=$PATH:$HOME/node/bin
cd src\main\resources\UI
npm update npm -g
npm install
npm run build
# set a default LANG if it does not exist in the environment
export LANG=${LANG:-en_US.UTF-8}
