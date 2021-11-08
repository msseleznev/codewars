function enough(cap, on, wait) {
    let freePlaces = cap-on;
    if (wait < freePlaces) {
        return 0;
    } else {
        return wait -freePlaces;
    }

}