# deploy to git server
echo "deploy to git server..."
msg="update plugin at `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
echo msg
git add .
git commit -m "$msg"
git push origin master

echo "done"
