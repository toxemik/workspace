# add linrunner/tlp ppa
sudo add-apt-repository ppa:linrunner/tlp
sudo apt update

# install tlp and tlp-rdw
sudo apt install -y  tlp tlp-rdw

# start tlp
sudo tlp start

# show status
tlp-stat -s

