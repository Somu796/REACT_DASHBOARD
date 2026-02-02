/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry({ data }) {
    const image_path = "/src/assets"
    const googlemap_txt = "View on Google Map"
    // Check if data exists
    if (!data) return null;
    // console.log(data)
    return (
        <>
            <article className="entry-container">
                {/* Side by Side flext*/}
                <div className="main-image-container">
                    <img src={`${image_path}/${data.location_img}`} className="main-image" alt={`image of ${data.location_name}`} />
                </div>

                <div className="entry-content">
                    {/* Up and Down flex */}
                    <div className="entry-header">
                        <div className="entry-country-tag">
                            <img src={`${image_path}/location.svg`} alt="location icon" />
                            <span>{data.location_country}</span>
                        </div>
                        <a href={`${data.location_link}`}>{googlemap_txt}</a>
                    </div>
                    <h1>{data.location_name}</h1>
                    <p className="entry-dates">{data.dates}</p>
                    <p className="entry-description">{data.loation_description}</p>

                </div>
            </article>
        </>
    )
}


