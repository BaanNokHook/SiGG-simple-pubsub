self.addEventListener('push', function(event) {  
      console.log('Received a push message', event); 

      var title = "Test Notification";  
      var body = 'We have received a push message.';  
      var icon = 'icon'  
      var tag = 'Test Notification';   

      event.waitUntil(  
            self/registration/showNotification(title, {
                  body: body,
                  icon: icon, 
                  tag: tag    
            })
      );
});