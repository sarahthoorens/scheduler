# Scheduler


Deployment date: 10/8/22</br>
Deployed address: https://sarahthoorens.github.io/scheduler/</br>
Topics applied: Bootstrap, jQuery, javascript, html, css</br>
Project goal: Create workday planner that stores info for each hour block and changes color based on time of day

## Project Description

Code an hourly day planner that keeps updated information on refresh and shows what items are on the future, past and present agenda. 


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Project review

#### Full-size version

<img src="/assets/work day scheduler.png" alt="header">

#### Responsive version

<img src="/assets/responsive.png" alt="responsive window">

**Challenges**

I had two major challenges while programming this: the first was local storage and how to apply it across all input forms. My code is very basic for this function because I could not figure out the right way to adhere a loop function. It's not DRY code at all, but I'm happy that it works for the most part. The second challenge was applying the colored rows based on time of day. In the end, I still need some tweaks to make this work as intended, but I'm satisfied with it as is, for now. 

**Lessons learned**

I really dug into the documentation for this challenge. I allowed myself extra time to thorougly read through how local storage works to get a firmer grasp before implementing it in this program. Although there are still some inconsistencies throughout, I'm coming to the understanding that perfection is not the only acceptable end-product right now. I hope to revisit this when the bootcamp is over.