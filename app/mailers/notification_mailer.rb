class NotificationMailer < ActionMailer::Base
  default from: "no-reply@gemsterapp.com"

  def comment_added
  	mail(to: "helloladybread@gmail.com", subject: "A comment has been added to your place")
  end
end
