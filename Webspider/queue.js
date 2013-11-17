function queue()
{
    this.queue=[];  
};

queue.prototype =
{
	push:function(elem)
	{
		this.queue.push(elem);
    },
        
    shift:function(elem)
	{
        if(this.queue.isEmpty())
		{
			return undefined;
		}
		this.queue.shift(elem);
    }
};

module.exports = queue;