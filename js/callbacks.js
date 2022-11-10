(
  function(api) {
  [
    "ready",
    "new_event",
    "form_submitted",
    "greeting_hidden",
    "rating_submitted",
    "visibility_changed",
    "greeting_displayed",
    "availability_changed",
    "customer_status_changed",
    "rich_message_button_clicked"
  ].forEach(function(eventName) {
    api.on(eventName, function(payload) {
      console.log("[LiveChatWidget] on", eventName, payload);
    });
  });
})(window.LiveChatWidget);
