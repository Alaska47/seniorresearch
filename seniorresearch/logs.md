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
 - everything for 2nd and 3rd robots
Still waiting on parts. Once the parts arrive, I will be able to construct 1 robot. If that robot works well and all the parts work without any problems, I can order the remaining parts.
Food for thought: How can I control stepper motors, dc motors, and servos with solely a Raspberry Pi?
 - Utilize H-bridges and other driver chips. Benefits include being able to communicate with motors directly from Python code with little latency. Drawbacks include needing to order these chips and wait for them to arrive before testing robots
 - Communicate with the Arduino using serial communication. Benefits include not needing to order additional chips and use the same power source used for previous robots designed in class. Drawbacks include having some latency and dealing with Arduino code
Tuesday, November 7, 2017 11:41:38 AM
~~~
Progress Report: 11/8-11/10
I completely redesigned the website from the ground up. The new website is more accessible and allows for users to browse the page regardless of order and without restriction. The progress reports are also dynamically loaded so that requires less manual work from me. I also submitted a purchase order for new multiplexers because the old ones were incompatible with the cameras I ordered.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
Now that the Raspberry Pi cameras are here, I can adjust my CAD drawings and start designed the camera interface that rests on top of the robot.
Monday, November 13, 2017 11:39:48 AM
~~~
Progress Report: 11/13-11/17
Did some under-the-hood improvements to the website to make sure it loaded faster. I also modified my CAD drawings to open up space for an Arduino because I will need one to drive the servos/dc motors on the robots.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
I intend on improving my CAD drawing and hopefully, the rest of the parts will arrive.
Tuesday, November 28, 2017 12:13:03 AM
~~~
Progress Report: 11/20-11/22
Continued working on CAD drawings for all sides of the robots.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
I need to still conduct accurate measurements of the cameras and multiplexers so that the case I design for them will be secure
Tuesday, November 28, 2017 12:14:33 AM
~~~
Progress Report: 11/27-12/1
Continued working on CAD drawings for all sides of the robots. I additionally worked on updating progress reports on the website. It looks like Amazon part orders came in, so I will be looking for one of my slip rings.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
Once I receive the slip ring, as well as the parts from Adafruit, I can conduct tests for the viability of the solution seen in this blog post: [http://adv-geo-research.blogspot.com/2015/05/raspberry-pi-camera-extension-cable.html](http://adv-geo-research.blogspot.com/2015/05/raspberry-pi-camera-extension-cable.html)
Sunday, December 3, 2017 11:59:09 PM
~~~
Progress Report: 12/11-12/15
Finalized CAD model with both camera pieces. Tried 3D-printing 1 of the screws but realized that I didn't have the right size bolt, meaning I needed to print them on my own.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
I need to take 2 pictures via the RPi cameras in order to start the image processing algorithms. I also need the slip rings to arrive so I can change the dimensions on the CAD if necessary.
Sunday, December 17, 2017 11:34:46 PM
~~~
Progress Report (1/2 - 1/5
Finalized CAD model with both camera pieces. I was able to print one of my screws and was also able to screw one of them in with a nut. I will continue to print my other parts.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
I need to take 2 pictures via the RPi cameras in order to start the image processing algorithms. I also need to print the rest of my CAD parts.
Monday, January 22, 2018 3:09:15 PM
~~~
Progress Report (1/8 - 1/12)
I attempted to print my stereo camera mounts. However, each time I tried printing it, the print would corrupt. I suspect that this is occurring because when I designed my model, I split 1 model into two and tried printing each one. When I split, most likely the model got corrupted.***
Remaining parts list***
 - 3 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
I need to take 2 pictures via the RPi cameras in order to start the image processing algorithms. I also need to redesign the model that got corrupted so I can reprint it. Additionally, I need to fix my website because a dependency updated and the website crashed. 
Monday, January 22, 2018 3:30:11 PM
~~~
Progress Report (1/16 - 1/19)
I received one of my slip rings from Amazon. However, I still need the multiplexers and other mounts in order to assemble my first robot. However, in the meantime, I will double check my specs with the slip ring model and make sure everything checks out before I print the rest of the modules.***
Remaining parts list***
 - 2 slip rings for 18+ wires (still waiting for one of them to arrive)
 - 3 Raspberry Pi V2 camera multiplexers  (still waiting for them to arrive)
 - Better wheels for robots?***
I now need to get stereo images from the RPi so I can give it to Neil for him to test his part of the project. I also need to print the rest of my CAD modules.
Monday, January 22, 2018 3:35:39 PM