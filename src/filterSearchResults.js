const filterSearchResults = (data, searchTerm) => {

    if (searchTerm === '' || searchTerm === undefined || searchTerm === null || searchTerm.length === 0) {

        return data;


    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    const filterData = data.filter((channel) => {

        if (channel.name.toLowerCase().includes(lowerSearchTerm)) {

            return true;

        }

        if (channel.tagline.toLowerCase().includes(lowerSearchTerm)) {

            return true;

        }

        if (channel.channeltype.toLowerCase().includes(lowerSearchTerm)) {

            return true;

        }

        return false;

    });

    return filterData;
}

export default filterSearchResults;