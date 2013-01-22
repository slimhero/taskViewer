<div class="container">
  <div class="row">
	  <h3 class="pull-left span2">taskViewer</h3>
	</div>
  <div class="row">
    <div class="navbar span12">
      <div class="navbar-inner">
        <a class="brand" href="#">Dashboard</a>
				<ul class="nav">
          <li class="active"><a><b>{{ session.name }}</b></a></li>
          <li class="divider-vertical"></li>
          <li><form class="navbar-search">
            <input type="text" class="search-query" placeholder="Context search">
          </form></li>
        </ul>
        <ul class="nav pull-right">
          <li class="divider-vertical"></li>
          <li><button class="btn">Create New Project</a></li>
          <li class="divider-vertical"></li>
          <li><button class="btn btn-warning">Options</a></li>
					<li class="txtalign-right">
            <a href="#" class="navbar-link txtalign-right">Log out</a>
          </li>
        </ul>
      </div>
    </div>

  </div>  
  <div class="row">
    <!-- Docs nav
    ================================================== -->
    <div id="menu" class="span2">
      <ul class="nav nav-tabs nav-stacked affix-top">
        <li><a href="#messages"> TODO-List
          <i class="icon-chevron-right pull-right"></i></a></li>
        <li><a href="#messages"> Messages
          <i class="icon-chevron-right pull-right"></i></a></li>
        <li><a href="#projects"> Projects
          <i class="icon-chevron-right pull-right"></i></a></li>
        <li><a href="#tickets"> Tickets
          <i class="icon-chevron-right pull-right"></i></a></li>
      </ul>
    </div>
    <!-- Contents
    ================================================== -->
    <div class="span10" id="user_content">
      <div id="bottom-line" class="span10 txtalign-center">
			    <div class="span2 well well-small">  
            <h2>0</h2>
				    <h6>PROJECTS</h6>
          </div>
          <div class="span2 well well-small">
			      <h2>0</h2>
				    <h6>TASKS</h6>
          </div>
          <div class="span2 well well-small">
			      <h2>0</h2>
				    <h6>MESSAGES</h6>
          </div>
          <div class="span2 well well-small">
			      <h2>0</h2>
				    <h6>TICKETS</h6>
          </div>
      </div>
      <br/>
      <div id="contributions-calendar" class="span10 txtalign-center">
        <div class="js-calendar-graph span8" data-url="/api/activity/all">
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
		</div>
  </div>
</div>
