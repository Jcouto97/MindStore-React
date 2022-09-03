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
							height="700px"
							src="https://maps.google.com/maps?q=Edif%C3%ADcio%20Central,%20Via%20do%20Conhecimento,%203830-352%20%C3%8Dlhavo&t=k&z=13&ie=UTF8&iwloc=&output=embed"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Map;
