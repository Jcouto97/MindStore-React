import React from "react";

function Map() {

	return (
		<>
			<div className="map_main-container">
				<div class="mapouter">
					<div class="gmap_canvas">
						<iframe
                            title="mytitle"
                            width="100%"
                            minwidth="200px"
                            height="500px"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=Edif%C3%ADcio%20Central,%20Via%20do%20Conhecimento,%203830-352%20%C3%8Dlhavo&t=k&z=13&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
						></iframe>
						<a href="https://123movies-to.org">{null}</a>
						<br></br>
						<style>.mapouter{"position:relative;text-align:right;height:500px;width:600px;"}</style>
						<a href="https://www.embedgooglemap.net">{null}</a>
						<style>.gmap_canvas {"overflow:hidden;background:none!important;height:500px;width:600px;"}</style>
					</div>
				</div>
			</div>
		</>
	);
}

export default Map;
