/*
Coding Algorithm Patterns and Principles


Good To Know

1. Whenever you start a toy problem, ALWAYS plan your approach before you write any code. A good way to do this is with the IOCE standard
  I = Inputs
  O = Outputs
  C = Complexity
  E = Edge Cases


Algorithm Patterns

1) Brute Force
"Enumerate all possible solutions, and check them for correctness."

2) Greedy
"Keep track of the best answer 'so far,' in one pass through the input."

This is a common way to go from brute force to something more efficient.

The tricky part is answering the question, "what values will I need to keep updated at each step in order to have the final answer when I reach the end of the input?"

3) Use a Hash Table
"Seriously, just use a hash map. Or maybe an array."

Hint: it's often a "counts" hash, mapping items to how many times they appear in the input array.

4) Use a filled Array
If you need to count or keep track of something, you have a known limited range that does not correlate with (n) 
and you don't want to incur the extra space cost of a hash table. 

5) Recursion with Memoization or Bottom Up (Iterative)



Time Complexity Chart

Constant     |  O(1)
Logarithmic  | O(log n)
Linear       | O(n)
Linearithmic | O(n log n)
Quadratic    | O(n^2)
Exponential  | O(2^n)
Factorial    | O(n!)


Dynammic Programming Steps

1. Visualize Examples - Using a directed acyclic graph helps show anwer paths and subproblems
2. Find an appropriate subproblem - Find subsequences that you can store and refer too. 
   It usually requires limiting a start & end point of the input.
3. Find relationships among subproblems - Understand that in order to solve a problem what subproblems
   already need solving. THen you can refer to the solution of prev sub problems to get the answer
   to the current problem
4. Generalize the relationship - This step is creating the contraint forumula required to solve
   a specific subproblem then usually store that result.
5. Implement - You need to solve the subproblems in the correct order. usually this means 
   solving problems from left to right or start to end.



Trees Algorithms

1. BFS
  This follows the Queue data structure with Arrays

  Advantages:

  A BFS will find the shortest path between the starting point and any other reachable node. A depth-first search will not necessarily find the shortest path.
  Disadvantages

  A BFS on a binary tree generally requires more memory than a DFS.

2. DFS
  This follows the Stack data structure with Arrays

  Advantages:

  Depth-first search on a binary tree generally requires less memory than breadth-first.
  Depth-first search can be easily implemented with recursion.
  Disadvantages

  A DFS doesn't necessarily find the shortest path to a node, while breadth-first search does.



Behavioral Questions to prep for CSOD Answers June 2021: 

  Tell me about a time when you were faced with a problem that had a number of possible solutions. 
  What was the problem and how did you determine the course of action? What was the outcome of that choice?
    - View 1, 2 & 3 of the Workflow Visualization UI when Kevin left on paternity leave. (I realized we had many fixes required)
      -- I was able to present a lot of fixes to UI such as (rewrite Action Creator component, browser compatibility for firefox, etc.)
         Even though our deadline for a demo for clients was 3 weeks away my findings added an additional week of work.
         The tradeoff was hacky code for Action Creator (adding a filter component in it that didn't place nice because the
         action creator component was restricted and others were using it so it would be difficult to change it). Or rewriting
         the component  to better fit our immediate needs and future features. It added an additional week but because I found it
         early and presented it to the team we were able to push the client demo with a much better and future proof UI. 
  When did you take a risk, make a mistake, or fail? How did you respond, and how did you grow from that experience?
    - Accidentally deploying ECS clusters to higher environments because of forgetting git tag.
      -- I created a deployment policy in our code to only deploy to select environments. I deployed our ECS cluster with this
         change to all envs knowing it would not go to higher envs because of the policy. However, I found out the next day that
         I had deployed this service to higher envs. I was confused but immediately tore down the service in those envs. I realized
         the reason this happened was because I forgot to add a git tag for the recent changes I made. A simple human error.
         I updated the git tag and the deployment policy works now.
         I then realized if I can easily make this mistake then other devs could as well. It could have bad impacts thinking
         we are deploying one thing but we are deploying another. So I was able to figure out a way for all PR's merged
         to the master branch to have an auto git tag feature. One wouldn't make the mistake anymore because it would be
         automated. I presented this find to the team and ended up updating all of our projects to use auto tagging. Building
         good systems is about having reslience against human mistakes.
    
  Describe a time you took the lead on a project.
    - View 1, 2 & 3 of the Workflow Visualization UI when Kevin left on paternity leave.
      -- I took charge. Found a bunch of issues and fixed them. Presented findings to product and mangers. Got approval
         to push deadline by a week to address those issues.
    
  What did you do when you needed to motivate a group of individuals or promote collaboration on a particular project?
    - Funny answer (Food) for lunch and learn
      -- I'm a big fan of knowledge sharing (make sure we don't have knowledge silos or only 1 SME (subject matter expert) and to 
         encourage personnal growth). So I created a meeting once every 2 weeks to share knowledge with local team. I didn't get
         a large reception for first meeting so I bought pizza for the second meeting and everyone showed up. I was later able to
         get budget for a lunch and the even became a huge success. People were sharing all sorts of knowledge and he has a backlist
         of presenters. This even grew to other teams finding out about our meeting and wanting us to record it to share.
         I decided to not record but to create an even larger meeting once/month with the same goal in mind to share knowledge.
         It was a big success and will continue even when I leave.
    
  How have you leveraged data to develop a strategy?


    
  Tell me your biggest weakness as an engineer.
    - Accepting code changes already in the repository or when a smart coworker approves a PR I don't dig into the PR details as much
      -- When I'm implementing a feature I like to look around the codebase for a similar feature so I can do a smart copy
         and change a few variables to make it work with my new feature so I don't have to reinvent the wheel and save time. 
         However, when I do this I quickly proofread the solution without digging into the details. Why, because the code is 
         already in our repository. This means it "must" (my weakness) be good code. So when I received PR comments saying that
         my approach is not the best or asking why I did the feature this way, I would think ... oh that was the code I copied.
         That was a wake up call for me to follow the rule of "leave the campsite cleaner than when you found it". Also, just
         because another really smart coworker approves a PR doesn't mean I shouldn't review it in depth. If we keep building
         features without cleaning up/refactoring our previous code then our foundation will become damaged and will require
         repairs.

    Describe a tricky bug you’ve encountered.
      - EC2 Down time randomely for long or short periods of time
        -- Tracked with splunk heartbeat logs. Then was able to fix by updating the deployment policy to be more availiable 
           (Investigate this answer)

    What’s the biggest project you’ve shipped?

    What’s your favorite programming language? Why?
      - Javascript
        -- Lots of cool features, front and backend, constantly growing with great documentation. Easy to make automation scripts
           to do most any job like a localization autumation script.

    How do you overcome interpersonal conflicts with coworkers?
      - Share how I mentored Stan when he was offended by comment from Meraj
   




  Technical Experience Accomplishments and Scenarios

  1. I'm great at picking up new topics and technologies. Not afraid to lead in unfamiliar territory.
    - Architechted and implemented SWF with Workflow Engine application
    - Scaled ECS service to handle more load using AWS autoscaling and microservice architecture
    - Implemented API's follow REST principles

    - Automated manual processes through scripts or configurations
      - Localization script
      - Auto git tag on PR merge
      - Auto increment project versions for package management (node, NuGet) script
  
  2. Frontend Experience
    - Creating shared components utilizing updated coding standards like hooks
    - Conditionally rendering
    - State management using Redux
      - Handling conditional rendering of state changes such as actions in pending/success/failure states
        - Showing loading bars for pending | shared component error pages for failure states etc.
    - Creating strong testing standards with implementation testing
      - Utilize Cypress for testing and mockit for faking the backend/api's
    - Sharing knowledge by mentoring 5 employees on the frontend

  3. What have I been working on recently?
    - Currently I'm onboarding a new manager and employee to our team
      - Before that I was involved in a project to report data through visualization of a UI feature
        - This was a viz project that incorporated data from our Def and Eng projects. I helped with the discussions
          behind the archithecture. I implemented the backend (api, service, and DB layer as well as system tests). I
          even created many features for the UI in displaying all of this reporting information.




Behavioral Questions to prep for IdeaCloud Answers May 2022:
  What did I do at IdeaCloud:
   1. Refactored codebase
     - Structured and organized the code repositories and enforced naming conventions
     - Linted and formatted the code as well as automate this for all code additions
     - Updated all React, converted class components to functional, converted lifecycle methods to hooks.
     - Made components more modular (multiple components were over 1000 lines of code)
     - Removed custom code and replaced with libraries (material-ui)
     - Implimented prop-types to help with code clarity and with debugging
   2. Improved the Sim development process
     - Moved digital assets from local to be hosted on AWS S3
       - This includes assets like images, videos, etc but also local packages  
     - Created deployment environments for dev and stage. Previously they deployed only to prod. This included changing S3 absolute references to relative so multiple envs work.
     - Updated/improved internal tools to streamline Sim development with Sim Core
   3. Created incident management system to handle ERM (Enterprise Risk Management)
     - Prepared checklist for SOC2 compliance in relation to company controls and testing those controls
     - Trained employees on important controls quarterly to ensure we avoid incidents
     - Resolved an incident with Adobe Partner login failure due to expired SSL cert that was required for API call to adobe's partner verification service.     
   4. Managed, coached, and educated the team
     - Acted as Product owner and created most epics and stories in our product mgmt system (ClickUp). I also conducted and managed team progress using the Scrum framework.
     - Setup a TWA (Team Working Agreement) to set baselines to ensure all devs can work well together and understand mutual expectations
     - I documented procedures for most internal processes. This helped educate the team, break down silos of information, and allowed for fast onboarding of new engineers.
     - I reviewed all PR's and coached the devs while guiding them to add clean, working code while following best practices.
     - I held multiple training video calls to educate on best practices and how to navigate and understand the codebase. I recorded these calls for onboarding documentation and reference.
     - I met on 1v1 with developers on a schedule to discuss career progression, mentor them on their goals, and made sure to understand their happiness levels and how I could assist in creating a great working environment and team culture.
     - I made sure to have remote/in-person team gatherings every 3 weeks for the team to connect on a level outside of work and have fun.
   5. Features
     - Added feature flag configuration to enable/disable features (previously feature branches were deployed to prod and there wasn't a good way to toggle features for certain clients or to test features)
       - Made sim features configurable with flags. Features like bullet navigation bar or initial screen or full screen prompt
     - Added route based code splitting to increase app performance using loadable
     - Add loading bars to loading components so user has a clear understanding of page loads
     - Changed Domain and DNS using Route53 for company name change from ForgeDx to IdeaCloud to ensure all subdomains routed correctly.
     - Architected and implimented custom analytics solution for embeded sims using Cloudfront logs, S3, cron shell script, Lambda, and QuickSight. This was required because cross-domain analytics can't be tracked by Google Analytics.
     - Finished Learn Mode and Remote features
     - Mobile outline toggle
   6. DevOps and DB Management
     - Managed the DB, Authentication, and hosting of all client projects on Firebase.
     - Implimented and educated team on best practices around git branching models, PR's, UAT, deployment pipeline processes and schedules (automating feature branch deploys to QA envs)
       - They were previously all over the place with feature branches being deployed to prod, scripts being used to deploy rather than tags, some repos having limited environments while others had QA and Stage. 
     - Moved authentication portal from serverless function single environment to containers in GCP CloudRun to enable multiple environments.
     - Improved and documented client onboarding process bringing down time from 2 days to 3 hours.
     - Saved $100's/month by refactoring how we use tools, what version of tools we use and who has access to them
       - Clickup, Assemble, Bitbucket
   7. Misc
     - Setup the interview process and hired engineers.
     - Provided tech support for clients and internal stakeholders with authentication or portal issues.
     - Managed Google Analytics, Google Tag Manager, and Data Studio reports that we shared with clients
*/


/*
##############################################################################################################
##############################################################################################################
*/



/* 
ALGORITHMS AND FORMULAS TO HAVE MEMORIZED
*/

//Binary Search

function binarySearch(target, nums) {
  //Track the left and right side indexes of the number sorted num array
  //while left <= right
    //find the mid index value
    //if value is === target then return true or target value
    //if value is > target then right becomes mid index - 1
    //else left becomes mid index + 1
  //return false

  //Input validation or edge cases
  if (typeof(target) !== "number") {
    return "please provide a number for the target";
  }
  if (!Array.isArray(nums)) {
    return "please provide an array for the nums argument";
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    let midValue = nums[midIndex];
    if (midValue === target) {
      return true;
    }
    if (midValue > target) {
      right = midIndex - 1;
    }
    else {
      left = midIndex + 1;
    }
  }

  return false;
}

console.log(binarySearch(1, {1: 1}));


//MergeSort

function mergeSort(array) {
  const half = Math.floor(array.length / 2)
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  //Splice or slice ... I prefer to slice since it doesn't change the input param
  // const left = array.splice(0, half)
  const left = array.slice(0, half);
  const right = array.slice(half);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

console.log(mergeSort([1, 6, 4, 9, 8, 2, 3]));



// Reverse (swap) in place

function reverse(array) {
  let left = 0;
  let right = array.length - 1;
  
  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    
    left++;
    right--;
  }
}


// Random number
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// Get Midpoint of range
const midpoint = Math.floor((ceiling + floor) / 2);

// Binary Tree Constructor
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
}

/*
  How to implment a Queue class with Linked List
    https://learnersbucket.com/tutorials/data-structures/implement-queue-using-linked-list/
    https://osgoodgunawan.medium.com/stack-and-queue-in-linkedlist-javascript-76ca86dd95fe
*/




/*
##############################################################################################################
##############################################################################################################
*/