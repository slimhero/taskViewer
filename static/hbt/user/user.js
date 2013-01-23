<div class="navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <div class="row">
        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="brand invisible" href="#">{{ session.name }}</a>
        
        <div class="nav-collapse collapse">
		      <ul class="nav">
            <li class="divider-vertical"></li>
            <li>
              <form class="navbar-search">
                <input type="text" placeholder="Context search">
              </form>
            </li>
          </ul>

          <ul class="nav pull-right">
					  <li class="txtalign-right">
              <a href="#" class="navbar-link txtalign-right">Log out</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
		    <a class="brand" href="#">{{ session.name }}</a>
        <ul class="nav">
          <li class="divider-vertical"></li>
          <li><a href="#projects" class="navbar-link disabled">Project(0)</a></li>
          <li class="divider-vertical"></li>
          <li><a href="#tasks" class="navbar-link disabled">Tasks(0)</a></li>
          <li class="divider-vertical"></li>
          <li><a href="#messages" class="navbar-link disabled">Messages(0)</a></li>
          <li class="divider-vertical"></li>
          <li><a href="#tickets" class="navbar-link disabled">Tickets(0)</a></li>
          <li class="divider-vertical"></li>
        </ul>
        <ul class="nav pull-right">
          <li class="divider-vertical"></li>
          <li><button class="btn">Create New Project</a></li>
          <li class="divider-vertical"></li>
          <li><button class="btn btn-warning">Options</a></li>
        </ul>
      </div>
    </div>
  </div>
</div> 

<!-- Subhead
================================================== -->
<header class="jumbotron subhead">
  <div class="container">
  </div>
</header>


<!-- Data
================================================== -->

<div class="container">
  <div class="row">

    <!-- Docs nav
    ================================================== -->
    <div id="menu" class="span2">
      <ul class="nav nav-tabs nav-stacked affix-top">
        <li><a href="#activity"> Activity
          <i class="icon-chevron-right pull-right"></i></a></li>
        <li><a href="#todo"> To-Do
          <i class="icon-chevron-right pull-right"></i></a></li>
      </ul>
    </div>

    <!-- Contents
    ================================================== -->
    <div class="span10"  data-target="#menu" data-spy="scroll">

      <!-- Activity
      ================================================== -->
      <section id="activity">
        <div class="page-header">
          <h1>Activity</h1>
        </div>

        <div id="contributions-calendar" class="txtalign-center">
          <div class="js-calendar-graph" data-url="/api/activity/year">
<!-- 
              <text x="0" y="-5" class="month">Jan</text>
              <text x="36" y="-5" class="month">Feb</text>
              <text x="84" y="-5" class="month">Mar</text>
              <text x="132" y="-5" class="month">Apr</text>
              <text x="192" y="-5" class="month">May</text>
              <text x="240" y="-5" class="month">Jun</text>
              <text x="288" y="-5" class="month">Jul</text>
              <text x="348" y="-5" class="month">Aug</text>
              <text x="396" y="-5" class="month">Sep</text>
              <text x="456" y="-5" class="month">Oct</text>
              <text x="504" y="-5" class="month">Nov</text>
              <text x="552" y="-5" class="month">Dec</text>
              <text x="612" y="-5" class="month">Jan</text>
-->
          </div>
          <br />
          <ul class="thumbnails">
            <li class="span2">
              <div class="thumbnail" data-url="/api/activity/week">
                <b>0</b>
                <small>changes for last week</small>
              </div>
            </li>
            <li class="span2">
              <div class="thumbnail" data-url="/api/activity/threedays">
                <b>0</b>
                <small>changes from  to </small>
              </div>
            </li>
            <li class="span2">
              <div class="thumbnail" data-url="/api/activity/day">
                <b>0</b>
                <small>changes for today</small>
              </div>
            </li>

          </ul>
		    </div>
      </section>

      <!-- TO-DO
      ================================================== -->
      <section id="todo">
        <div class="page-header">
          <h1>To-Do</h1>
        </div>
      </section>

      <!-- Projects
      ================================================== -->
      <section id="projects">
        <div class="page-header">
          <h1>Projects</h1>
        </div>
      </section>

      <!-- Tasks
      ================================================== -->
      <section id="tasks">
        <div class="page-header">
          <h1>Tasks</h1>
        </div>
      </section>

      <!-- Messages
      ================================================== -->
      <section id="messages">
        <div class="page-header">
          <h1>Messages</h1>
        </div>
      </section>

      <!-- Tickets
      ================================================== -->
      <section id="tickets">
        <div class="page-header">
          <h1>Tickets</h1>
        </div>
      </section>


    </div>
  </div>
</div>
