# adword-demo

[Demo](https://anujsharma-bbd.github.io/adword-demo/)

<br/>
#How to add new campaign 
<br/>

![image](https://user-images.githubusercontent.com/18569992/77066372-05a26480-6a09-11ea-9413-49ecfbf90c79.png)


#Add campaign Screen 
<br/>
![popup](https://user-images.githubusercontent.com/18569992/77066414-1fdc4280-6a09-11ea-85ba-efd5244ee9f3.png)

#After Submission 
<br/>
![After Save](https://user-images.githubusercontent.com/18569992/77066470-38e4f380-6a09-11ea-912f-d95d9de21014.png)


#Through Console 
<br/>
![OR Through Console](https://user-images.githubusercontent.com/18569992/77067004-3cc54580-6a0a-11ea-89e2-a1d5fb4f5b54.png)

#Sample Data
<br/>
<code>
 AddCampaigns([
    { id:1,name: 'Campaign 1', userId: 1, startDate: '12/02/2012', endDate: '12/03/2012', budget: '3k USD' },
    { id:2,name: 'Campaign 2', userId: 99, startDate: '12/02/2012', endDate: '12/12/2020', budget: '3k USD' }
    ])
</code>

# running project inside of an environment 
its mandatory to pass --env=qa | prod | dev etc whatever we need to use environment <br/>
 <br/>
  like for qa environment --> <br/>
<code>
  npm start --env=qa
</code>
<br/>
 <br/>
for prod environment --> <br/>
<code>
  npm start --env=prod
</code>
<br/>
 <br/>
for dev environment --> <br/>
<code>
  <br/>
  npm start --env=dev
</code>
<br/>


# creating build with an environment 
its mandatory to pass --env=qa | prod | dev etc whatever we need to use environment <br/>
 <br/>
like for qa environment --> <br/>
<code>
  npm run build --env=qa
</code>
<br/>
 <br/>
for prod environment --> <br/>
<code>
  npm run build --env=prod
</code>
<br/>
 <br/>
for dev environment --> <br/>
<code>
  <br/>
  npm run build --env=dev
</code>
<br/>
<br/>
<br/>

#Spacial-Features & Tech Stack

1) react 16.13+
2) redux
3) immer  -- for store immutability 
4) Data persists after page refresh

<br/>
<br/>
<br/>