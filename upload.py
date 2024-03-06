from os import system, getcwd, chdir;

#Preparando archivos
commit = input("Ingrese el nombre del commit")
webpage = f"{getcwd()}\\dist\\portafolio-web\\browser"

system("git add .")
system(f'git commit -m "{commit}"')
system("ng build")

system("git push -u AngularBlog master")

chdir(webpage)
system("git add .")
system(f'git commit -m "{commit}"')
system("git push -u AngularBlog gh-pages")