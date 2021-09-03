const Loading = () => {
    return(
        <div className="mt-5 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-info" style={{width: '5rem', height: '5rem'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;