# 수원의 이해
#### 202020708 김평주, 202020737 한도연 <br/><br/><br/>
### _어린이의 눈높이에 맞춘 수원 화성 교육용 웹 페이지_
---
💻 _**명령어**_

* **git init**
> git을 사용하기 위한 준비
~~~
$ git init
~~~
<br/><br/>
* **git clone**
> git repository 연결
~~~
$ git clone <repository 주소>
~~~
<br/><br/>
* **git branch**
> 각자의 branch에서 개발하고 main branch에서 merge<br/>
> pj: 김평주 / dy: 한도연<br/>
> main / master / pj / dy
~~~
$ git switch <branch name> 
~~~
<br/><br/>
* **git pull**
> branch에 있는 최신 파일 pull<br/>
> 각자 branch에서 작업 후 main brnach에 merge하니까 pull할 때는 main branch 사용<br/>
> 난.. 바로 git pull만 해도 되던데... 일단 git pull로 해보자^^
~~~
$ git pull origin <branch name>
~~~
<br/><br/>
* **git push**
~~~
$ git add .
$ git status
$ git commit -a -m "내용 작성"
$ git push origin <branch name>
~~~
<br/><br/>
* **git merge**
~~~
$ git merge <branch name>
~~~

---
💣 _**자주 생기는 conflict와 해결**_
* error: failed to push some refs to
> 아래 명령어대로 pull한 뒤 바로 $ git push origin &#60;branch name&#62; 해보고.. 안되면 아래 방법 실행
~~~
$ git pull origin <branch name>
$ git add .
$ git status
$ git commit -a -m "내용 작성"
$ git push origin <branch name>
~~~
<br/><br/>
> _**참고 !**_ <br/>
> 충돌한 경우 코드에서 <<<<<<< 와 ======= 와 >>>>>>> 를 발견할 수 있는데 <br/>
> =======를 기준으로 <<<<<<<부터 =======까지의 내용은 main branch에 없는 내용
> =======를 기준으로 =======부터 >>>>>>>까지의 내용은 main branch에 있지만 현재 내가 있는 branch에 없는 내용
> 잘 판단하고 수정해서 git push하면 conflict 해결 !
