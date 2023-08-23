# CLI assignments

## 1. Directed assignment

1. Open Git Bash in your development folder.
2. Use "ls" to list files and directories in the working directory.
3. Use "mkdir" to make a directory with the name "cli_example".
4. Use "cd" relatively to change the working directory to the newly created directory. Example "cd cli_example/"
5. Use "tocuh" to create a binary file. Call the file "my_file.md"
6. Use "ls" to list files and directories in the working directory.
   > expected to only see my_file.md
7. Write something to your markdown file either using vim or echo "string" >> my_file.md.
   > Singe > will overwrite the file
   > Exit vim by pressing "esc : q", or "esc : w q" to save the file before exiting
8. Initiate a git repository of your working directory. git init
9. Create a .gitignore from the teminal: echo "node_modules" >> .gitignore
10. Initiate npm with npm init -y
11. Install the node package bootstrap to your project: npm install bootstrap@latest
12. Add and commit changes to git. git add -A, git commit -m"initiate project"
13. Create a branch remotely on your github profile.
14. You might need to set main branch with git branch -M main
    > default branch should be named main or master
15. Set remote origin: git remote add origin "your git-url"
16. push changes: git push -u origin main

## 2. Open assignment

Create a new github repo and install a couple of npm packages (find some on the internet). Make sure you do not push anything to git that should be ignored. Create a simple README.md with only the projects name. Make a directory for css and the stylesheet inside the folder. Create index.html in the root of the project. Make the changes be reflected remotely on your github account.
