# sdp-assignment
This repository holds the source code and some parts of documentation for Software Development Project for our semester 5 in Asia Pacific University (APU).

Team members
1. Chiang Kai Ni
2. Cheong Yee Weng
3. Chew Tung En
4. Cheng Zi Ming
5. Chin Hong Wei

System Requirements
✅Composer version 2.5.5.
✅PHP version 8.1.6
✅Next.js v13.2.4

<h3>BUG LIST<h3>
<i font-size="12px">To ensure that we work as efficient as possible, please post bugs found here and also<br>
update whether you are using a bug to reduce redundancy.</i>
<br><br>
<table>
  <thead>
    <tr>
      <th>No.</th>
      <th>Issue Encountered</th>
      <th>Debugging by</th>
      <th>Debugged by</th>
      <th>Extra Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- Add table rows here -->
    <tr>
      <td>1</td>
      <td>Assign student function doesn't work</td>
      <td>Johnson</td>
      <td></td>
      <td>Make JSON array for lecturers to take down not more than 5 students</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Announcement table not showing for student home page</td>
      <td>Tung En</td>
      <td>Tung En</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Calendar not working</td>
      <td>Tung En Zi Ming</td>
      <td>Tung En Zi Ming</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Submission havent do</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Search function havent do</td>
      <td>Tung En Zi Ming</td>
      <td>Tung En Zi Ming</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Slider announcement only appear for milisecond</td>
      <td>Tung En</td>
      <td>Tung En</td>
      <td>Can be seen now but the problem is all data display in one slide and other slides are empty</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Fetch staff API for students haven't done yet</td>
      <td>Johnson</td>
      <td>Johnson</td>
      <td>Awaiting test by frontend (StaffStu.tsx)</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Display Staff information from Students side</td>
      <td>TungEn</td>
      <td>TungEn</td>
      <td>Completed</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Unable to edit student profile</td>
      <td>TungEn, Johnson</td>
      <td>TungEn, Johnson</td>
      <td>Error code {data map is not a function}</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Make JSON array for lecturers to take down not more than 5 students</td>
      <td>Johnson</td>
      <td>Johnson</td>
      <td>Edited Lecturer model to not save more tha 5 into array</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Announcement now need to make adjustments - allow one data in one slide</td>
      <td>Tung En</td>
      <td>Tung En</td>
      <td>Done </td>
    </tr>
    <tr>
      <td>12</td>
      <td>Edit Announcements - get all anouncements including those are not shown</td>
      <td>Tung En, Zi Ming</td>
      <td>Tung En, Zi Ming</td>
      <td>Done for getAllAnouncements, addAnouncements,, still need -displayAnnouncements (EditSlides.tsx) (need to call specific announcements to edit, id pass as token) and -updateAnnouncements (EditSlides.tsx)</td>
    </tr>
    <tr>
      <td>13</td>
      <td>The Lecturer to display own students haven't do</td>
      <td></td>
      <td></td>
      <td>api (displayLecturerOwnStudents)</td>
    </tr>
    <tr>
      <td>14</td>
      <td>update profile for PM and Lecturer has problem in accepting values with space</td>
      <td></td>
      <td></td>
      <td>words with space such as Bob Jones will count the space as anotehr data and written in different column</td>
    </tr>
    <tr>
      <td>15</td>
      <td>the problem calling the data for lecturer profile with events in student page</td>
      <td></td>
      <td></td>
      <td>id is still null, but can be passed in and there is some internal server error and route api not found</td>
    </tr>
    
    <!-- Add more rows as needed -->
  </tbody>
</table>