class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    redirect_to root_path, notice: "グループを作成しました" if @group.save
  end

  def edit
  end

  def update
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end
end
