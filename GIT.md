# GIT

* Initially git load the file in repository but later it does not add file again and again, rather it just track the changes made in the file  
 
* detached head -> if we we checkout one commit, it is possible that this commit is in multiple branches, therefore in this case if we check the current branch it will show us that we are not in any branch but in detached head. Any changes sone in this branch will not be saved in any our branches, we need to create new branch to save the changes  

* reflog -> store data for last 30 days. can use checkout or reset to go back to any changes
```
echo "# Regimen" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nsaqui4c/Regimen.git
git push -u origin main
```

### gitignore

*.log ->  ignore all .log file   
!test.log -> include test.log  
/web-app/* -> ignore web-app folder  

### Merge types

* Fast-forward merge -> git merge <featureBranch> (run it from master) 
	* Use in case where once feature branch is created, no changes in master is done  
	* git merge --squash <feature branch name> -> copy changes to master, but we need to commit.  
* Non Fast-forward merge -> additional commit in both master and feature after feat was created.  
	* recursive ->  git merge --no-ff <feature bransch name>
		* if feature had two commits f1 and f2, now master will have 3 more commits f1,f2 and merge.
		* to go back we just need to go back 1 step (merge commit)->git reset --hard HEAD~1
		* if master has changes after creatoin of feature, merge will automatically do recursive
	* octopus
	* Ours
	* Subtree
### Rebase

* git rebase master  -> run from feature -> rebase the feture from latest master.
* In master we have two  commits m1 m2, then we create feature branch and made two commit f1 f2, then we made another commit in master m3.
	* using rebase we actually rebase the feture with m3 and then we can dimple merge the code.
	* this will create new hashes for f1 and f2 so be carefull *
	* Now we can Fast-forward merge it with master
	

### Cherry-pick

* let say we create new feature branch more master and in branch we made several commit, but we just one commit to merge back to master not the whole branch. We can achieve this by cherry-picking. 
* STEPS:  
	* from feature branch -  git log -> get the commit id
	* checkout master branch
	* from master branch - git cherry-pick <commit-id>
	* this will merge the commit and create new commit id in master

### Tags
* To list -> git tag

* to create
	* Light-weight tag -> temperory tag
		* git tag "some tag" <commitId for which you want to create tag>
	* Annotated Tag -> 
		* git tag -a <some tag> -m "message with the tag"

* once created, we can use tag to find commit or checkout commit
	* git show <tag>
	* git checkout <tag>


### Branches

* Local Branches -> present in local
* Remote Branches -> Present in cloud
* Remote Tracking Branch -> copy of remote branch in local for syncing purpose.
	* Created automatically when we connect remote branch with local branch.
	* git fetch oeigin -> to sync the RTB with latest status of remote branch
* Local Tracking branch ->
	* git branch --track <remote BranchName> origin/<remote branch name>
	* This will connect our local branch with remote tracking brnach.
	* git push->Now running command will push changes to remote tracking branch hence to remote.
		* this is actually - git push origin <branchName>
	* branch -vv  -> to see connection b/w local and remote tracking branch
* git push -u origin <branchName> -> this will create alocal tracking branch with <branchNme>, thne create remote tracking branch with same name and then create remote branch and then push the data.
  
### Remote 

* There is no direct connection between local and remote branch. 
	* Remote tracking branch is created in local as soon as we add remote branch
	* All changes are done in local copy of remote tracking branch, and then to branch
	* If we push code to remote, first remote tracking branch get synced and then remote.
	* If we pull code to local, then remote tracking branch get synced and then local.
	
* git pull ->  combination of git fetch and git  merge
	




|command										| Description   									|
| ---											| ---												|
|git -init										|initialiize git									|
|git config --global user.email <email>			| add user email who is committing					|
|git config --global user.name <name>			| add user name who is committing					|
| ---											| ---												|
|git add <file>									| add file to staging/tracking						|
|git rm <file>									| delete file from tracking							|
|git ls-files									| list files in our staging area					|
|git rm --cached <file>							| Unstage file										|
|git restore --staged <file>					| Unstage file										|
|git commit -m"message"							| Commit project in local repository				|
| ---											| ---												|
|git log										| give records of all commit in current branch		|
|git checkout <commit id from log>				| checkout the earlier code							|
|git switch -c <new Branch Name>				| create and switch new branch from current checkout|
|git switch -									||										
|git checkout master							| exit out from current checkout and back to master	| 
| ---											| ---												|
|git branch <branch >							| create new branch in local copy of current branch	|
|git branch										| list all the branch in local						|
|git checkout <branchName>						| Switch branch										|
|git checkout -b <branch name>					| create and switch to new branch					|
|git merge <featureBranch> (run it from master) | merge the current branch from feature branch		|
| ---											| ---												|
|git restore <file name> 						| delete changes & restore unstaged file			|
|git checkout -- <fileName>						| same as git restore (-- refers to current branch)	|
|git clean -dn									| list new untracked file							|
|git clean -df									| delete new untracked file							|
|git restore --staged <file>					| Unstage file										|
|git reset <filename>							| restore file from branch in stage area(sameAsAbove|
|git checkout <filename>						| to undo the chnages in file						|
|git reset --soft HEAD~1						| undo last commit,file will still be in tracking	|
|git reset HEAD~1								| Above+remove file not in HEAD from tracking		|
|git reset --hard HEAD~1						| Above +remove file not in HEAD from workspace also|
|git branch -D <branch Name1 branchName2>		| Delete branch from local							|
|git branch -d <branchName>						| can only delete those which are already merged	|
| ---											| ---												|
|git stash										| save your uncommited unstaged changes in memory	|
|git stash apply								| access stash changes								|
|git stash list									| get list of all stashes							|
|git stash apply <index>						| access stash from list							|
|git stash push -m"msg"							| stash it with a message							|
|git stash pop <index>							| pop the changes from stash to branch				|
|git stash drop <index>							| drop the stash									|
|git stash clear								| delete all stashes								|
| ---											| ---												|
|git reflog										| give logs of all the activity in repository		|
|git reset --hard <hash from reflog> 			| HEAD change back to selected hash					|
|git checkout <hash from reflog>				| We are in detached-mode, create branch from here	|
| --- 											| --- 												|
|git merge <featureBranch>						| merge from feat to master with all commit in feat	|
|git merge --squash <featureBranch>				| copy all changes to master,without any feat commit|
|git merge --no-ff <feature branch name>		| recursive merge.Check [Merge types](#Merge-types)	|
|git merge --abort								| To abort merge in case of any conflict			|
|git log --merge								| to check th emerge conflict						|
|git rebase master								| run from feature. Check [Rebase](#Rebase)			|
|git cherry-pick <commitId from featureBranch>	| pick 1 commit to merge rather than whole branch	|
| --- 											| --- 												|
|git tag <tag> <commitId>						| create lightweight tag [Tags](#Tags)				|
|git tag -a <tag> -m <message>					| created annotated tag	[Tags](#Tags)				|
|git tag -d <tag>								| Delete tag bt tag id								|
| --- 											| --- 												|
|git remote add origin <URL>					| Add remote url									|
|git branch -a									| Show local and remote tracking branch				|
|git branch -r									| show remote branch which are getting tracked		|
|git branch -vv									| list local tracking branch anf=d their remote		|
|git ls-remote									| list all branch present in remote					|
|git fetch origin								| fetch all branches and create remote track branch	|
|git remote										| shows current remote URL added					|
|git remote show origin							| show detailed configuration						|
|git clone <url> 								| clone remote repository in local					|
| ---											|---												|
|git push origin --delete <branch Name> 		| Delete remote branch from cloud					|
|git push --force origin master					| update remote even if HEAD is behind in local		|
























