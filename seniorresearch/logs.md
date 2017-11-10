Progress Report: 9/4-9/8
Submitted and discussed pre proposals in classroom***
Collected 3 Raspberry Pis from my house for use in the project, along with an old router for WiFi communication***
Started researching for ROS packages that would allow me to run SLAM algorithms on a 3D map derived from stereo cameras***
 - [stereo-slam](http://wiki.ros.org/stereo_slam)
 - [viso2](http://wiki.ros.org/viso2_ros)***
Remaining parts list***
 - [3 slip rings for 18+ wires](https://www.amazon.com/Logisaf-Compact-Capsule-Circuits-Equipment/dp/B01KA41SV0/)
 - 6 Raspberry Pi cameras
 - 2 Raspberry Pi camera multiplexers
 - 3 portable battery packs for the Raspberry Pi
 - Better wheels for robots?
Monday, September 11, 2017 5:33:12 AM
~~~
Progress Report: 9/11-9/15
Collected 3 portable battery packs that can be used to power Raspberry Pis***
Installed all the appropriate software on 1 of the Raspberry Pis***
Remaining parts list***
 - [3 slip rings for 18+ wires](https://www.amazon.com/Logisaf-Compact-Capsule-Circuits-Equipment/dp/B01KA41SV0/)
 - 6 Raspberry Pi cameras
 - 2 Raspberry Pi camera multiplexers
 - Better wheels for robots?
Sunday, September 17, 2017 10:18:56 PM
~~~
Progress Report: 9/18-9/22
Setup heroku+django backend for project website. The discussion and blog posts will be dynamic so I will need to develop the backend using heroku+django. I also used the materialize css libraries to develop my website.***
Ordered the 3 portable battery packs for the Raspberry Pi but found out that they don't provide enough current for the Raspberry Pi to function properly.***
Remaining parts list***
 - 3 slip rings for 18+ wires
 - 6 Raspberry Pi cameras
 - 2 Raspberry Pi camera multiplexers
 - Better wheels for robots?***
Plan for next week is to continue working on the website and return the 3 portable battery packs.
Thursday, October 12, 2017 9:59:45 AM
~~~
Progress Report: 9/25-9/29
Continued working on the website. I opted for a website design using a navbar that would always stay at the top of the page and have the navbar be able to link to all the different sections on the website. This seems to be a good design because it offers ease of access to the people who visit the website. I also set up the DNS settings on the Namecheap Web Hosting Service so that anybody can access the website at one link.***
I also returned the portable battery packs and ordered new ones with a much higher current rating (1A -> 2.1A) so now I can actually turn on the Raspberry Pis***
Remaining parts list***
 - 3 slip rings for 18+ wires
 - 6 Raspberry Pi cameras
 - 2 Raspberry Pi camera multiplexers
 - Better wheels for robots?***
Plan for next week is to continue working on the website and test out the new battery packs once they arrive.
Thursday, October 12, 2017 10:03:37 AM
~~~
Progress Report: 10/2-10/6
I finally finished working on the design of the website, and now the only thing remaining to do is actually fill in the content for the website.***
I received the new portable batteries and was able to confirm that they work perfectly with the Raspberry Pi. The only issue is that the portable batteries are pretty large and semi-circular so I may have to compensate for this in my design of the swarm robots.***
Remaining parts list***
 - 3 slip rings for 18+ wires
 - 6 Raspberry Pi cameras (Talked with Dr. Torbert this week about ordering the camera, and he told me that he placed the order so I am now waiting for them to arrive)
 - 2 Raspberry Pi camera multiplexers
 - Better wheels for robots?***
Plan for next week is to start working on the design of the swarm robots and CAD everything out. I also need to fill in the content of the website. I also need to place the orders for all the remaining parts (i.e multiplexers, slip rings)
Thursday, October 12, 2017 10:07:47 AM
~~~
Progress Report: 10/9-10/13
I started CADing out the initial designs for the swarm robots. I also finished the project proposal. As specified in my project proposal, I want to use a 2-wheel drive system so I will need to figure out whether I want stronger motors or stick to servos, and whether the servos we currently have in the Robotics Lab are strong enough to move the robot without wheel slippage.***
Remaining parts list***
 - 3 slip rings for 18+ wires (need to fill out order form)
 - 6 Raspberry Pi cameras (still waiting for them to arrive)
 - 2 Raspberry Pi camera multiplexers  (need to fill out order form)
 - Better wheels for robots?***
After CADing out the initial designs, I will try to cut them on the laser cutter and then see if the initial components (Raspberry Pi, external battery, breadboard, servos) all fit on the board. Then I can look into issues with weight and see if I need more powerful motors/better servos.
Monday, October 16, 2017 10:46:36 PM
~~~
Progress Report: 10/16-10/20
Presented proposal to rest of the class. Got feedback on project (i.e ideas for localization, worrying about cameras scanning other robots)***
Remaining parts list***
 - 3 slip rings for 18+ wires (need to fill out order form)
 - 6 Raspberry Pi cameras (still waiting for them to arrive)
 - 2 Raspberry Pi camera multiplexers  (need to fill out order form)
 - Better wheels for robots?***
Next steps are to submit remaining order forms. Once the parts arrive, I can measure them more accurately and adjust my CAD drawings.
Tuesday, October 31, 2017 9:09:11 AM
~~~
Progress Report: 10/23-10/27
Filled out order forms for 1 robot. Once those parts arrive, I will be able to construct 1 robot. If that robot works well and all the parts work without any problems, I can order the remaining parts.***
Remaining parts list***
 - 2 slip rings for 18+ wires (need to fill out order form)
 - 6 Raspberry Pi cameras (still waiting for them to arrive)
 - 2 Raspberry Pi camera multiplexers  (need to fill out order form)
 - Better wheels for robots?***
Once the parts arrive, I will be able to construct 1 robot. If that robot works well and all the parts work without any problems, I can order the remaining parts.
Tuesday, October 31, 2017 9:11:08 AM
~~~
Progress Report: 10/30-11/3
I worked on updating the website, added a gallery, and a discussion page. I began working on CAD drawing. I created "floor plan" for the robot in terms of where things will go (i.e battery, RPi, breadboard, PCB, Arduino?)***
Remaining parts list***
 - everything for 2nd and 3rd robots***
Still waiting on parts. Once the parts arrive, I will be able to construct 1 robot. If that robot works well and all the parts work without any problems, I can order the remaining parts.***
Food for thought: How can I control stepper motors, dc motors, and servos with solely a Raspberry Pi?***
 - Utilize H-bridges and other driver chips. Benefits include being able to communicate with motors directly from Python code with little latency. Drawbacks include needing to order these chips and wait for them to arrive before testing robots
 - Communicate with the Arduino using serial communication. Benefits include not needing to order additional chips and use the same power source used for previous robots designed in class. Drawbacks include having some latency and dealing with Arduino code
Tuesday, November 7, 2017 11:41:38 AM