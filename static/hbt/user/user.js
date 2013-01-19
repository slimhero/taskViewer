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
          <li><button class="btn">Create New Project</a></li>
          <li class="divider-vertical"></li>
          <li><button class="btn btn-warning">Options</a></li>
        </ul>
        <ul class="nav pull-right">
          <li><form class="navbar-search">
            <input type="text" class="search-query" placeholder="Context search">
          </form></li>
					<li class="txtalign-right"><a href="#" class="navbar-link txtalign-right">Log out</a></li>
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
		<div class="span10">
      <div id="bottom-line" class="well data-bar">
        <div class="span2">
			    <h2>0</h2>
				  <h6>PROJECTS</h6>
			  </div>  
        <div class="span2">
			    <h2>0</h2>
				  <h6>TASKS</h6>
			  </div>  
        <div class="span2 last">
			    <h2>0</h2>
				  <h6>MESSAGES</h6>
			  </div>  
			    <h2>0</h2>
				  <h6>TICKETS</h6>
      </div>
		</div>
  </div>
</div>
